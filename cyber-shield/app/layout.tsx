import type { Metadata } from "next";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  Show,
  UserButton
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "CyberShield",
  description: "Premium AI Cybersecurity Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        <ClerkProvider>

          <header className="fixed top-0 right-0 z-50 p-6 flex gap-4">

            <Show when="signed-out">

              <SignInButton />

              <SignUpButton />

            </Show>

            <Show when="signed-in">

              <UserButton />

            </Show>

          </header>

          {children}

        </ClerkProvider>

      </body>

    </html>

  );
}