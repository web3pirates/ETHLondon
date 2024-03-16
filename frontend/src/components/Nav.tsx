import Menu from "./Menu";
import Wrapper from "./Wrapper";
import { useSharedState } from "@/utils/store";

export function Nav() {
  const [{ user }] = useSharedState();

  return (
    <Wrapper>
      <Menu />
      <div style={{ display: "flex", gap: "10px" }}>
        {user && (
          <button
            className={`text-gray-500 hover:text-gray-900`}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <img
              src="/images/github.png"
              alt={`Github image`}
              width={15}
              height={15}
            />
            {user.login}
          </button>
        )}
      </div>
    </Wrapper>
  );
}
