import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();
  

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        userName={user?.name!}
        userId={user?.id}
        // profileImage={user?.profileURL}
        //gpt
        profileImage={user?.profileURL || "/user-avatar.png"} 
        //
        type="generate"
      />
    </>
  );
};

export default Page;