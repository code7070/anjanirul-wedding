import style from "@/styles/cover.module.scss";
import { useRouter } from "next/router";

export default function Cover({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: any;
}) {
  let height = "max-h-[700px]";
  if (isOpen) height = "max-h-[0px] overflow-hidden";

  const { query } = useRouter();

  const toggle = () => setOpen(!isOpen);

  let guestName = "Tamu Terhormat";
  if (query.tamu) guestName = `${query.tamu}`;

  return (
    <div className={`${style.coverScreen} ${isOpen ? style.open : ""}`}>
      <div className="px-8">
        <div className={style.coverInfo}>
          <div>Wedding Invitation by</div>
          <div>Mei 14, 2023 </div>
        </div>
        <div className={style.brideName}>
          <div>anjani</div>
          <div>
            <span className={style.join}>&</span>
            <span>irul</span>
          </div>
        </div>
      </div>
      <div className={style.bottomArea}>
        <div className={style.btmInside}>
          <div className="bg-black p-1 text-center font-halant mb-5 text-sm">
            Dear: {guestName}
          </div>
          <div className={style.btmCta}>
            <button className="btn-white" type="button" onClick={toggle}>
              Open Invitation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}