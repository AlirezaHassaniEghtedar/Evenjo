import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signInApi, signUpApi, signOutApi } from "../api/auth";
import { getProfileApi } from "../api/profile/get-profile.api.ts";
import { getUser, isAuthenticated, setUser } from "../utils/auth.util.ts";

import type { SignInDto, SignUpDto } from "../dto/request";
import type { User } from "../entities/user.ts";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: SignInDto) => Promise<void>;
  signup: (userData: SignUpDto) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const userData = getUser();
    if (userData && isAuthenticated()) {
      setUserState(userData);
    }
    setIsLoading(false);
  }, []);

  const loginMutation = useMutation({
    mutationFn: signInApi,
    onSuccess: async (response) => {
      if ("result" in response && response.result) {
        try {
          const profileData = await getProfileApi();
          const userData: User = {
            id: 0,
            username: profileData.username,
            email: profileData.email,
          };
          setUserState(userData);
          setUser(userData);
          navigate("/");
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
          const tempUser: User = {
            id: 0,
            username: "User",
            email: "",
          };
          setUserState(tempUser);
          setUser(tempUser);
          navigate("/");
        }
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
      throw error;
    },
  });

  const signupMutation = useMutation({
    mutationFn: signUpApi,
    onSuccess: (response) => {
      if ("result" in response && response.result) {
        navigate("/login");
      }
    },
    onError: (error) => {
      console.error("Signup failed:", error);
      throw error;
    },
  });

  const logoutMutation = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      setUserState(null);
      queryClient.clear();
      navigate("/login");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      setUserState(null);
      queryClient.clear();
      navigate("/login");
    },
  });

  const login = async (credentials: SignInDto) => {
    await loginMutation.mutateAsync(credentials);
  };

  const signup = async (userData: SignUpDto) => {
    await signupMutation.mutateAsync(userData);
  };

  const logout = async () => {
    await logoutMutation.mutateAsync();
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    setUser: setUserState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
