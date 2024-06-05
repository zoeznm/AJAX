const a =  `https://apis.data.go.kr/6300000/eventDataService/eventDataListJson
?
serviceKey
=
BOSIHO7gl1tSe4mkEEfU0TErgpn97yFSS8q7aBAJ%2FWkDdRB4F450fg8Sfts8jfBjIxx69ea%2FcxlSpFzL77XWMQ%3D%3D&`;

const b = "endpoint 주고" + "주소값";

const endpoint = `http://apis.data.go.kr/6300000/eventDataService`;

const keyName = `BOSIHO7gl1tSe4mkEEfU0TErgpn97yFSS8q7aBAJ%2FWkDdRB4F450fg8Sfts8jfBjIxx69ea%2FcxlSpFzL77XWMQ%3D%3D`;
const example = `
http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=${keyName}&numOfRows=10&pageNo=1`;

console.log(example);