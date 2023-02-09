import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
        <Link href = {address}>
            <Icon/>
        <p>{title}</p>
        </Link>
    </div>
  )
}
