import IssuesList from '../../components/issues/IssueList'
function IssuesLayout(){
    return (
        <div>
            <aside>
                <IssuesList issues={[]}/>
            </aside>
            {children}
        </div>
    )
}