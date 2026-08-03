"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"

type SocialProvider = "google" | "github"

export function SocialLoginButtons() {
  const [pendingProvider, setPendingProvider] = useState<SocialProvider | null>(
    null
  )

  async function signInWithSocial(provider: SocialProvider) {
    setPendingProvider(provider)

    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "http://localhost:3000",
    })

    if (error) {
      console.error(error)
      setPendingProvider(null)
    }
  }

  function handleGoogleSignIn() {
    void signInWithSocial("google")
  }

  function handleGithubSignIn() {
    void signInWithSocial("github")
  }

  return (
    <>
      <Button
        className="w-full h-12 rounded-lg p-2 bg-primary-foreground text-black hover:bg-primary-foreground/90 duration-75 hover:scale-105 cursor-pointer"
        disabled={pendingProvider !== null}
        onClick={handleGoogleSignIn}
      >
        <Image src={"/google.svg"} alt="Google" width={24} height={24} />
        <Label className="flex-1 justify-center">
          {pendingProvider === "google" ? "Entrando..." : "Entrar com Google"}
        </Label>
      </Button>
      <Button
        className="w-full h-12 rounded-lg p-2 bg-primary-foreground text-black hover:bg-primary-foreground/90 duration-75 hover:scale-105 cursor-pointer"
        disabled={pendingProvider !== null}
        onClick={handleGithubSignIn}
      >
        <Image src={"/github.svg"} alt="GitHub" width={24} height={24} />
        <Label className="flex-1 justify-center">
          {pendingProvider === "github" ? "Entrando..." : "Entrar com GitHub"}
        </Label>
      </Button>
    </>
  )
}
