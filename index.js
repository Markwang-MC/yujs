class Yu{
    constructor(template){
      this.fn = null;
      this.template=template
    }
    run (data){
      if (this.fn) return this.fn(data)
      let props = Object.keys(data)
      this.fn = new Function(`{${props.join(',')}}`,`return \`${this.template}\`;`)
      return this.fn(data);
    }
}
export default Yu
