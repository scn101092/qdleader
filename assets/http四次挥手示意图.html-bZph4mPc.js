import{_,o as e,c as t,d as n}from"./app-fr3Buw_y.js";const c={},s=n("pre",null,[n("code",null,`               客户端                     服务端
     ESTABLISTHED|                         | ESTABLISTHED 
                 |                         |
                 |      FIN=1，seq=u       |        
        FIN_WAIT1|  ---------------------->|CLOSE_WAIT
                 |                         |
                 |                         |
                 |                         |
                 |                         |
                 |    ACK=1,ack=u+1,seq=v, |        
        FIN_WAIT2|  <----------------------|CLOSE_WAIT
                 |                         |
                 |                         |
                 |                         |
                 |                         |
                 |FIN=1,ACK=1,ack=u+1,seq=w|        
       FIN_WAIT2 | <---------------------- |LAST_ACK
                 |                         |
                 |                         |
                 |                         |
                 |                         |
                 |  ACK=1,seq=u+1,ack=w+1  |        
        FIN_WAIT2| ----------------------> |CLOSED
`)],-1),o=n("p",null,"（等待2MSL CLOSED）| | | | | | | |",-1),l=[s,o];function a(I,r){return e(),t("div",null,l)}const u=_(c,[["render",a],["__file","http四次挥手示意图.html.vue"]]);export{u as default};
