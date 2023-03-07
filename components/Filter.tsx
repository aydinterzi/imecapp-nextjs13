"use client"
import React, { useState } from 'react'

type Filter = {
  id: string,
  value: string,
  selected?: boolean
}

type Props = {
  options: Filter[]
  onApply?: (value: Filter[]) => void,
  title?: string
}

const Filter = ({ options, onApply, title }: Props) => {

  const [filters, setFilters] = useState<{ id: string, value: string, selected: boolean }[]>(options.map((option) => ({ ...option, selected: false })))

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">Filter</label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {filters.map((filter) => (
          <li key={filter.id}>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">{filter.value}</span>
                <input type="checkbox" checked className="checkbox" />
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter