import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="flex gap-3">
        <SignedOut>
          <SignInButton mode="modal" />

          <SignUpButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex gap-3 m-10">
        <>test</>
      </div>
    </>
  );
}
