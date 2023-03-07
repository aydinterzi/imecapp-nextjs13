import React, { useState } from 'react'

type Filter = {
  id: string,
  value: string,
  selected?: boolean
}

type Props = {
  options: Filter[]
  onApply: (value: Filter[]) => void,
  title: string
}

const Filter = ({options, onApply, title }: Props) => {

  const [filters, setFilters] = useState<{ id:string, value:string, selected:boolean}[]>(options.map((option) => ({ ...option, selected: false })))

 

  return (
    <div>Filter</div>
  )
}

export default Filter