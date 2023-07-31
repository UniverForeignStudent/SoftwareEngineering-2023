# SoftwareEngineering-2023

北京航天航空大学-软件工程-2023-大作业

背景：随着旅游业的蓬勃发展，机场的运营需求不断增加。为了更好地服务管理者、航司、旅客、商家 和机场工作人员，需要一套智慧机场系统来管理和协调机场的各项工作。

必需功能：

1. 航班信息：航司可以在系统上发布航班信息，包括价格、起飞日期时间、航班号等，由系统生成包 括具体登机口信息的时刻表，因为该机场跑道有限，同时间不能超过2架飞机同时起飞，为确保安 全，同一个跑道的飞机起落前后30min不应该安排其他飞机，方便旅客查询和购买机票。对已确定 的航班，航司可以调整航班价格，或者取消航班，并通知旅客。

2. 旅客信息：旅客可以通过系统查询订票信息是否成功、生成电子机票等，并得知具体的登机口和航 站楼信息，临近起飞还会受到起飞通知，系统还可以提供行李跟踪功能，帮助旅客及时了解行李的 位置和状态。

3. 报修功能：机场工作人员可以在系统上报修设备和设施(附带图片)，并等待管理员批准。

4. 表单管理：管理者可以在系统上打印财务报表、查看航班时刻表、批量导入航班信息。

5. 商家入驻：商家可以在系统上申请入驻机场系统，之后可以线上销售产品，并将货物送至指定的登机口。

6. 停车管理：机场可以提供停车位管理功能，旅客可以预订停车位并在线支付费用。

7. 客服功能：提供客服服务，为旅客解答常见问题和提供帮助。

可选功能：

1. 等待降价通知：旅客可以设置价格预警，一旦机票价格下降，系统会及时通知。

2. 等待候补通知：旅客可以在系统上设置候补通知，一旦有人退票，系统会及时通知。

3. 机场导航功能：系统可以提供机场导航功能，为旅客提供从进入机场到登机的全流程指引。

4. 智能安检：机场可以引入智能安检技术，根据排队情况和旅客值机信息动态调整安检窗口，vip旅客应该优先安排，并通知相关工作人员做出反应，旅客也可以通过系统得知目前哪条安检队伍排队人数少。

frontend 작업 분배：
航班信息和客服功能交给金俊河@김준하 
商家入驻和停车管理交给张志韩@21373045张志韩 
旅客信息、保修功能、表单管理交给吴承旭


-----------------------------------------------번역-----------------------------------------------

배경: 관광산업이 호황을 누리면서 공항의 운영수요가 계속 증가하고 있다.관리자, 항공사, 승객, 사업자 및 공항 직원에게 더 나은 서비스를 제공하기 위해서는 공항의 다양한 작업을 관리하고 조정하는 스마트 공항 시스템이 필요합니다.

필수 기능:

1항공편 정보: 항공사는 가격, 출발 날짜, 항공편 번호 등을 포함한 항공편 정보를 시스템에 게시할 수 있으며 시스템은 특정 탑승구 정보를 포함하는 시간표를 생성할 수 있습니다. 이 공항은 활주로가 제한되어 있기 때문에 동시에 2대의 항공기가 이륙할 수 없습니다. 안전을 보장하기 위해 동일한 활주로에 있는 항공기는 착륙 전후 30분에 다른 항공기를 배치하여 승객의 항공권 조회 및 구매를 용이하게 해서는 안 됩니다.확정된 항공편에 대해 항공사는 항공편 가격을 조정하거나 항공편을 취소하고 승객에게 통지할 수 있습니다.

2승객 정보: 승객은 시스템을 통해 예약 정보의 성공 여부, 전자 항공권 생성 등을 조회할 수 있으며, 구체적인 탑승구와 터미널 정보를 알 수 있으며, 이륙이 임박하면 이륙 통지를 받을 수 있으며, 시스템은 또한 수하물 추적 기능을 제공하여 승객들이 수하물의 위치와 상태를 즉시 알 수 있도록 도와줍니다.

3수리 기능: 공항 직원은 시스템에서 장비 및 시설(사진 첨부)을 수리하고 관리자의 승인을 기다릴 수 있습니다.

4양식 관리: 관리자는 시스템에서 재무제표를 인쇄하고 항공편 일정을 확인하고 항공편 정보를 대량으로 가져올 수 있습니다.

5상가 입점 : 상인은 시스템에서 공항 시스템 입점을 신청할 수 있으며, 이후 온라인으로 제품을 판매하여 지정된 탑승구로 상품을 배송할 수 있습니다.

6주차관리 : 공항에서 주차공간 관리기능을 제공하여 승객들이 주차공간을 예약하고 온라인으로 요금을 지불할 수 있습니다.

7고객 서비스 기능: 승객에게 자주 묻는 질문에 답하고 도움을 주는 고객 서비스를 제공합니다.

옵션 기능:

1가격 인하 통지 대기: 승객은 가격 경보를 설정할 수 있으며 항공권 가격이 하락하면 시스템이 적시에 통지합니다.

2후보 통지 대기: 승객은 시스템에 후보 통지를 설정할 수 있으며, 환불이 발생하면 시스템이 즉시 통지합니다.

3공항 내비게이션 기능: 시스템은 공항 내비게이션 기능을 제공하여 승객에게 공항 입국부터 탑승까지 전 과정에 대한 지침을 제공할 수 있습니다.

4스마트 보안 검색: 공항은 스마트 보안 검색 기술을 도입할 수 있습니다. 대기 행렬과 승객 체크인 정보에 따라 보안 검색 창을 동적으로 조정할 수 있습니다. vip 승객은 우선적으로 배치하고 관련 직원에게 응답해야 합니다. 승객도 시스템을 통해 현재 어떤 보안 검색 팀이 줄을 서 있는지 알 수 있습니다.

느낀점: 처음으로 제대로 된 사이트를 만들어봤고, 백엔드와 프론트를 연결하는 방법도 알 수 있어서 꽤나 유용한 기회였다.
--------------------------------------------------------------------------------------------------------------------

다행히 좋은 친구들을 만나서 순조롭게 통과했다. 프론트엔드 친구들이 특히나 많은 도움을 주었는데 나도 css부분에서 많은 도움을 줄 수 있어서 너무 순조로운 시간이었다.
