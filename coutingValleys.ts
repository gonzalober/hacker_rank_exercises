const countingValleys=(steps: number, path: string): number =>{
  // Write your code here
  let arr:any[]=  path.split("")
  let valleyCounts:number=0
  let dCounts:number=0
  for(let i:number=0;i<steps;i++){
      if(arr[i]==="D"){
          dCounts--
      }else {
          if(dCounts===-1){valleyCounts++}
      dCounts++
      }
  }
  return valleyCounts
}
