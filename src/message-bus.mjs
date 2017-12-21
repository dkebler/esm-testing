import ipc from 'node-ipc'

const BROKER_ID = 'broker'

ipc.config.id = 'somedevice'
ipc.config.retry = 1000

ipc.connectTo(
  BROKER_ID,
  function(){
    ipc.of[BROKER_ID].on(
      'connect',
      function(){
        ipc.log(`connected to ${BROKER_ID}`)
        ipc.of[BROKER_ID].emit(
          'device.req',
          {
            id      : ipc.config.id,
            message : 'understand'
          }
        )
      }
    )
    // ipc.of.bus.on(
    //   'disconnect',
    //   function(){
    //     ipc.log('disconnected from bus')
    //   }
    // )

    // listen for bus
    ipc.of[BROKER_ID].on(
      'server.res',
      function(data){
        ipc.log('got a response from server : ', data)
      }
    )

    // console.log(ipc.of.bus.destroy)
  }
)
