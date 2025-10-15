import { type ReactNode, useState, useEffect, type FormEvent } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import Input from "../../../components/Input/Input.tsx";
import Button from "../../../components/Button/Button.tsx";

import SolarUserRoundedLinear from "../../../icons/auth/SolarUserRoundedLinear.tsx";
import HugeiconsMail02 from "../../../icons/auth/HugeiconsMail02.tsx";

import { getProfileApi } from "../../../api/profile/get-profile.api.ts";
import { editProfileApi } from "../../../api/profile/edit-profile.api.ts";
import { useAuth } from "../../../contexts/AuthContext.tsx";

import styles from "./Profile.module.css";

export default function (): ReactNode {
  const { user, setUser } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileApi,
    enabled: !!user,
  });

  useEffect(() => {
    if (profileData) {
      setUsername(profileData.username);
      setEmail(profileData.email);
    }

    console.log(profileData);
  }, [profileData]);

  const updateProfileMutation = useMutation({
    mutationFn: editProfileApi,
    onSuccess: () => {
      setSuccess("Profile updated successfully!");
      setError(null);
      if (user) {
        setUser({
          ...user,
          username,
          email,
        });
      }
    },
    onError: (error) => {
      setError(
        error instanceof Error ? error.message : "Failed to update profile",
      );
      setSuccess(null);
    },
  });

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!username.trim() || !email.trim()) {
      setError("Username and email are required");
      return;
    }

    await updateProfileMutation.mutateAsync({
      username: username.trim(),
      email: email.trim(),
    });
  };

  if (isLoading) {
    return (
      <div className={styles.profile}>
        <div className={styles.loading}>Loading profile...</div>
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <div className={styles.greetings}>
        <span>
          <SolarUserRoundedLinear />
        </span>
        <h2>{username || "User"}</h2>
        <span>{email || "No email"}</span>
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}

      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          name="username"
          label="Username"
          iconLeft={<SolarUserRoundedLinear />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={updateProfileMutation.isPending}
          required
        />
        <Input
          type="email"
          name="email"
          label="Email"
          iconLeft={<HugeiconsMail02 />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={updateProfileMutation.isPending}
          required
        />
        <Button
          size="large"
          type="submit"
          disabled={updateProfileMutation.isPending}
        >
          {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </div>
  );
}
