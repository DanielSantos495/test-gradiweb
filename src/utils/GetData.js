export const GetData = (url, method = 'GET') => {

   return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()

      // Abrimos nueva solicitud
      request.open(method, url, true)

      // onreadystatechange: escuchamos el estado de la petición
      request.onreadystatechange = () => {
         if (request.readyState === 4) {
            if(request.status === 200) {
               resolve(JSON.parse(request.responseText))
            } else {
               reject(new Error(request.status))
            }
         }
      }

      request.send(null)
   })
}