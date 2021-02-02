/*
Script used to collect publication data from the Human Cell Atlas
Publications website:

https://www.humancellatlas.org/publications/

*/
import d3

allEntries = []
function processEntry(index){
  
  d3.select(this).selectAll(".periodical").nodes().forEach(publication=>{
    entry = {}
    entry.title = d3.select(publication).select(".article").text()
    entry.authors = d3.select(publication).select(".authors").text()
    entry.authorList = d3.select(publication).selectAll(".author").nodes().map(d=>{return d3.select(d).text()})
    entry.year = d3.select(publication).select(".publication .year").text()
    try{
    entry.journal = d3.select(publication).select(".publication .title").text()
    }catch(e){}
    try{
    entry.volume = d3.select(publication).select(".publication .volume").text()
    }catch(e){}
    try{
    entry.number = d3.select(publication).select(".publication .number").text()
    }catch(e){}
    try{
      entry.pagerange = d3.select(publication).select(".publication .pagerange").text()
    }catch(e){}
    entry.links = d3.select(publication).select(".links").selectAll("a").nodes().map(d=>{return d3.select(d).text()})
    
    allEntries.push(entry)
  })

}
d3.selectAll(".publications_list").each(processEntry)
console.log(JSON.stringify(allEntries))
