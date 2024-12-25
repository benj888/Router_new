interface Prop{ 
    value: number
}

export function Shownumber(prop:Prop) {
  return <div> 計數: {prop.value}</div>;
}
