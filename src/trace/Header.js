import React from 'react'

export const Header = () => <>
    <header className="row border border-primary pt-2 pb-2 position-fixed container bg-white">
        <div className="col-3">Logo</div>
        <div className="col-9 d-flex pr-0">
            <div>header line</div>
            <div className="ml-auto">User</div>
        </div>
    </header>
</>