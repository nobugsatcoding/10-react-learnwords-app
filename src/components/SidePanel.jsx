import wordslist from "../data/wordslist"

export const SidePanel = () => {
  return (
    <div>
        <div className="sidePanel">
            You have {wordslist.length}
            <br/>
            words in List
        </div>
    </div>
  )
}
