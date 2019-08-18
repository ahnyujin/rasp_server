# 숨좀쉬자(PleaseBreath) - Pi
> 공기 청정 기기를 제어하여 실내 환경을 쾌적하게 만드는 AI　공기 관리 솔루션

[](./image/pb.png)

## 실행 방법
```sh
cd /Project/H/TEST
node IN && node OUT && node Trans && node ROSE
```

## 역할
1.  아두이노가 블루투스로 전송한 센서값을 읽는다. 
2.  외부와 내부의 센서값을 구분하여 웹서버로 전송한다.
3.  모드에 맞게 해당 기기의 블루투스에 IR값을 전송한다.