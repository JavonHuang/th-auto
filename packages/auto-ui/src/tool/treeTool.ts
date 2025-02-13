const generateID = ():string => { 
  let timestamp = new Date().getTime();
  const uuid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (timestamp + Math.random() * 16) % 16 | 0;
    timestamp = Math.floor(timestamp / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

const removeNode=(nodeList:Array<any>,id: string)=> {
  let result:any=[]
  function findAndRemove(node:any, id:string) {
    if (node.id === id) {
      // 如果找到了节点，返回null表示删除
      return null;
    }
    if (node.children) {
      node.children = node.children.filter((child:any) => findAndRemove(child, id));
    }
    // 如果没有删除节点，返回当前节点
    return node;
  }
  nodeList.forEach((e)=>{
    if(e.id!=id){
      findAndRemove(e, id);
      result.push(e)
    }
  })
  return result
}

const insertChildNode =(nodeList:Array<any>,nodeId: string, childrenNode: any)=>{
  nodeList.forEach((e)=>{
    let node:any = findNode(nodeId, e,(node)=>{});
    if(node){
      if (node.children) {
        node.children.push(childrenNode);
      } else {
        node.children = [childrenNode];
      }
    }
  })
}

const findNode=(nodeId:string,node:any,callBack:(n:any)=>void)=>{
  if (node.id === nodeId) {
    callBack(node)
    return node;
  }
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      let found:any = findNode(nodeId,node.children[i],callBack);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export {
  generateID,
  removeNode,
  insertChildNode
}