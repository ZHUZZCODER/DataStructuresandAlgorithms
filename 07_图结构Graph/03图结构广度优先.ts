class Graph<T> {
  //顶点
  private verteces: T[] = [];
  //边
  private adjList: Map<T, T[]> = new Map();
  //添加顶点和边的方法
  addVertex(vertex: T) {
    //将顶点添加数组中保存
    this.verteces.push(vertex);
    //创建一个连接表的数组
    this.adjList.set(vertex, []);
  }

  //连接
  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1);
  }

  //打印结构
  traverse() {
    this.verteces.forEach((vertex) => {
      const edges = this.adjList.get(vertex);
      console.log(`${vertex} => ${edges?.join(" ")}`);
    });
  }

  bfs() {
    //判断是否有顶点
    if (this.verteces.length === 0) return;
    //创建一个队列结构访问每一个顶点
    const queue: T[] = [];
    //创建set结构，记录某一个顶点是否被访问过
    const visited = new Set<T>();
    visited.add(this.verteces[0]);
    //遍历队列中每一个顶点
    while (queue.length) {
      //访问队列中第一个顶点
      const vertex = queue.shift()!;
      console.log(vertex);
      //相邻顶点
      const neighbors = this.adjList.get(vertex);
      //没有就加入顶点
      if (!neighbors) continue;
      for (const nei of neighbors) {
        if (!visited.has(nei)) {
          visited.add(nei);
          queue.push(nei);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.traverse();

export {};
