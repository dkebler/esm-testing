import ipc from 'node-ipc'
// const ipc = require('node-ipc')

ipc.config.id = 'broker'
ipc.config.retry= 1500

ipc.serve(
  function(){
    ipc.server.on(
      'device.req',
      function(data,socket){
        if (data.message === 'understand') {
          ipc.server.emit(
            socket,
            'server.res',
            {
              id      : ipc.config.id,
              message : `Message from ${data.id} understood`
            }
          )
        }
      }
    )
  }
)



ipc.server.start()
