import { useTranslation } from "react-i18next";
import { usePlayerContext } from "../context/PlayerContext";
import { usePlayerInGameStats } from "../hooks/usePlayerInGameStats";
import { ActionStat } from "./ActionStat";

export function PlayerInGameStats() {
  const { player, shotType } = usePlayerContext();
  const { shot, dribble, pass, tackle, block, intercept, punch, catchStat } =
    usePlayerInGameStats();
  const { t } = useTranslation("table");

  const isGK = player?.positions == "GK";

  return (
    <main className="action-container">
      {isGK ? (
        <>
          <ActionStat
            action="catch"
            actionLabel={t("catch")}
            value={catchStat}
          />
          <ActionStat action="punch" actionLabel={t("punch")} value={punch} />
        </>
      ) : (
        <>
          <ActionStat
            action={shotType}
            actionLabel={t(shotType)}
            value={shot}
          />
          <ActionStat action="pass" actionLabel={t("pass")} value={pass} />
          <ActionStat action="onetwo" actionLabel={t("one_two")} value={pass} />
          <ActionStat
            action="dribble"
            actionLabel={t("dribble")}
            value={dribble}
          />
          <ActionStat action="block" actionLabel={t("block")} value={block} />
          <ActionStat
            action="intercept"
            actionLabel={t("intercept")}
            value={intercept}
          />
          <ActionStat
            action="tackle"
            actionLabel={t("tackle")}
            value={tackle}
          />
        </>
      )}
    </main>
  );
}
