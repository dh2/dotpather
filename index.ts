type PathType = {
  [key: string]: any;
}
export default function dotpath (str: string) {
  const parts = str.split('.')
  const len = parts.length

  return function parse (obj: PathType) {
    let testKey

    for (let i = 0; i < len; ++i) {
      testKey = parts[i]

      if (!obj) return

      obj = obj[testKey]
    }

    return obj
  }
}
