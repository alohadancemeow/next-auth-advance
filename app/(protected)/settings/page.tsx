import { signOut } from "@/auth";

type Props = {};

const Setting = (props: Props) => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button>Sign out</button>
    </form>
  );
};

export default Setting;
