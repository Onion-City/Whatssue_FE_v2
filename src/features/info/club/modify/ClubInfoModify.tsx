import { HistoryHeader } from "@/components/organisms/Header"
import { Nav } from "@/components/organisms/Nav"
import ClubInfoModifyForm from "./components/ClubInfoModifyForm"

function ClubInfoModify() {
  return (
    <>
      <HistoryHeader />
      <div className="clubInfoModify">
        <ClubInfoModifyForm />
      </div>
      <Nav />
    </>
  )
}

export default ClubInfoModify