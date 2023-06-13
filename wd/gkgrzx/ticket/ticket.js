const ticketColorArray = ['linear-gradient(to right, #f4ff79, #f54640)','linear-gradient(to right, #eff5f0, #f4f80e)','linear-gradient(to right, #ddff47, #08e2ff)','linear-gradient(to right, #83eca9, #e4f80e)']
var token = window.localStorage.getItem('token')
if(token == 'null'){
  alert('请登录!!!');
  window.location.href = '../../index.html'
}
var count = 2;//初始化统计页面的count
var flag = -1;//防止重复渲染
var showMoreContainer = document.querySelector('.table-show-more')
var showMoreA = showMoreContainer.querySelector('a.showMore');
// 获取机票容器元素
var container = document.querySelector('.container');

showMoreA.addEventListener('click',showMore)

function showMore(){
  count +=2;
  flag +=2;
  fetchFlightTicket();
}

//渲染个人机票的函数
function drawTicket(Data) {
  console.log('flag的值为:'+flag)
    var data = Data['details']
    console.log('该顾客的机票信息为:'+data.length)
    if(data.length <= 2 || data.length <= count){
      showMoreContainer.style.display = 'none';
    }else{
      showMoreContainer.style.display = 'block';
    }
    
    
    for(var i = 0;i<data.length;i++){
        if((i >= count || i <= flag) ){
          continue;
        }
        // 创建机票元素
        var ticket = document.createElement('div');
        ticket.className = 'ticket';
    
        // 创建左侧部分元素
        var ticketLeft = document.createElement('div');
        ticketLeft.className = 'ticket-left';
    
        // 创建角落座位容器元素
        var cornerSeatContainer = document.createElement('div');
        cornerSeatContainer.className = 'corner-seat-container';
    
        // 创建座位文本元素
        var seatText = document.createElement('div');
        seatText.className = 'item';
        seatText.textContent = 'seat';
    
        // 创建座位详情元素
        var seatDetail = document.createElement('div');
        seatDetail.className = 'lgdetail';
        seatDetail.textContent = data[i].site;
    
        // 将座位文本和座位详情添加到角落座位容器中
        cornerSeatContainer.appendChild(seatText);
        cornerSeatContainer.appendChild(seatDetail);
    
        // 创建飞机容器元素
        var airplaneContainer = document.createElement('div');
        airplaneContainer.className = 'airplane-container';
    
        // 创建飞机图像元素
        var airplaneImg = document.createElement('img');
        airplaneImg.src = './ticket/blackAirplane.webp';
        airplaneImg.alt = 'airplane-img';
    
        // 将飞机图像添加到飞机容器中
        airplaneContainer.appendChild(airplaneImg);


    

        // 创建表格元素
        var table = document.createElement('table');
        table.className = 'departure-time';

        // 创建表头行
        var thead = document.createElement('thead');
        var headerRow = document.createElement('tr');
        headerRow.className = 'item';
        headerRow.style.textAlign = 'center';
        headerRow.style.width ='30px'

        // 创建表头单元格
        var takeoffHeader = document.createElement('th');
        takeoffHeader.textContent = 'takeoff';
        headerRow.appendChild(takeoffHeader);
        takeoffHeader.style.textAlign = 'center';

        var toHeader = document.createElement('th');
        toHeader.textContent = 'To';
        headerRow.appendChild(toHeader);
        toHeader.style.textAlign = 'center';

        var departureHeader = document.createElement('th');
        departureHeader.textContent = 'landing';
        headerRow.appendChild(departureHeader);
        departureHeader.style.textAlign = 'center';

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // 创建数据行
        var dataRow = document.createElement('tr');
        dataRow.className = 'lgdetail';

        // 创建数据单元格
        var takeoffCell = document.createElement('td');
        takeoffCell.style.marginRight = '10px';
        // 分割日期和时间
        var parts = data[i].takeoff_date.split("-");
        var dateString = parts[0]; // 日期部分： "2023/5/31"
        var timeString = parts[1]; // 时间部分： "20:50"
        takeoffCell.textContent = formatTime(timeString);
        dataRow.appendChild(takeoffCell);

        var toCell = document.createElement('td');
        dataRow.appendChild(toCell)
        // 设置 toCell 的内容，可以根据需要添加相应的数据

        var departureCell = document.createElement('td');
        parts = data[i].arrive_date.split("-");
        timeString = parts[1]; 
        departureCell.textContent = formatTime(timeString);
        dataRow.appendChild(departureCell);

        table.appendChild(dataRow);


        // 创建出发地元素
        var departing = document.createElement('div');
        departing.className = 'departing';
    
        // 创建出发地文本元素
        var departingText = document.createElement('div');
        departingText.className = 'item';
        departingText.textContent = 'departure';
    
        // 创建出发地详情元素
        var departingDetail = document.createElement('div');
        departingDetail.className = 'smdetail';
        departingDetail.textContent = data[i].departure;
    
        // 将出发地文本和出发地详情添加到出发地元素中
        departing.appendChild(departingText);
        departing.appendChild(departingDetail);
    
        // 将角落座位容器、飞机容器、出发时间和出发地添加到左侧部分元素中
        ticketLeft.appendChild(cornerSeatContainer);
        ticketLeft.appendChild(airplaneContainer);
        ticketLeft.appendChild(table);
        ticketLeft.appendChild(departing);
    
        // 创建中间部分元素
        var ticketMiddle = document.createElement('div');
        ticketMiddle.className = 'ticket-middle';
    
        // 创建乘客姓名元素
        var passengerName = document.createElement('div');
        passengerName.className = 'passenger-name';
    
        // 创建乘客姓名文本元素
        var passengerNameText = document.createElement('div');
        passengerNameText.className = 'item';
        passengerNameText.textContent = 'passenger';
    
        // 创建乘客姓名详情元素
        var passengerNameDetail = document.createElement('div');
        passengerNameDetail.className = 'smdetail';
        passengerNameDetail.textContent = data[i].username;
    
        // 将乘客姓名文本和乘客姓名详情添加到乘客姓名元素中
        passengerName.appendChild(passengerNameText);
        passengerName.appendChild(passengerNameDetail);
    
        // 创建登机口元素
        var gate = document.createElement('div');
        gate.className = 'gate';
    
        // 创建登机口文本元素
        var gateText = document.createElement('div');
        gateText.className = 'item';
        gateText.textContent = 'port';
    
        // 创建登机口详情元素
        var gateDetail = document.createElement('div');
        gateDetail.className = 'lgdetail';
        gateDetail.textContent = data[i].port;
    
        // 将登机口文本和登机口详情添加到登机口元素中
        gate.appendChild(gateText);
        gate.appendChild(gateDetail);
    
        // 创建航班元素
        var flight = document.createElement('div');
        flight.className = 'flight';
    
        // 创建航班文本元素
        var flightText = document.createElement('div');
        flightText.className = 'item';
        flightText.textContent = 'flight';
    
        // 创建航班详情元素
        var flightDetail = document.createElement('div');
        flightDetail.className = 'lgdetail';
        flightDetail.textContent = data[i].flight_id;
    
        // 将航班文本和航班详情添加到航班元素中
        flight.appendChild(flightText);
        flight.appendChild(flightDetail);
    
        // 创建目的地元素
        var destination = document.createElement('div');
        destination.className = 'destination';
    
        // 创建目的地文本元素
        var destinationText = document.createElement('div');
        destinationText.className = 'item';
        destinationText.textContent = 'destination';
    
        // 创建目的地详情元素
        var destinationDetail = document.createElement('div');
        destinationDetail.className = 'smdetail';
        destinationDetail.textContent = data[i].destination;
    
        // 将目的地文本和目的地详情添加到目的地元素中
        destination.appendChild(destinationText);
        destination.appendChild(destinationDetail);
    
        // 创建团体元素
        var group = document.createElement('div');
        group.className = 'group';
    
        // 创建团体文本元素
        var groupText = document.createElement('div');
        groupText.className = 'item';
        groupText.textContent = 'company';
    
        // 创建团体详情元素
        var groupDetail = document.createElement('div');
        groupDetail.className = 'smdetail';
        groupDetail.textContent = data[i].company_id;
    
        // 将团体文本和团体详情添加到团体元素中
        group.appendChild(groupText);
        group.appendChild(groupDetail);
    
        // 创建序列号元素
        var serial = document.createElement('div');
        serial.className = 'serial';
        var serialDetail = document.createElement('div');
        serialDetail.textContent = data[i].serial;
        serial.appendChild(serialDetail)
    
        // 将乘客姓名、登机口、航班、目的地、团体和序列号添加到中间部分元素中
        ticketMiddle.appendChild(passengerName);
        ticketMiddle.appendChild(gate);
        ticketMiddle.appendChild(flight);
        ticketMiddle.appendChild(destination);
        ticketMiddle.appendChild(group);
        ticketMiddle.appendChild(serial);
    
        // 创建右侧部分元素
        var ticketRight = document.createElement('div');
        ticketRight.className = 'ticket-right';
    
        // 创建航班详情元素
        var stubFlight = document.createElement('div');
        stubFlight.className = 'stub-flight';
    
        // 创建航班文本元素
        var stubFlightText = document.createElement('div');
        stubFlightText.className = 'smitem';
        stubFlightText.textContent = 'flight';
    
        // 创建航班详情元素
        var stubFlightDetail = document.createElement('div');
        stubFlightDetail.className = 'exsmdetail';
        stubFlightDetail.textContent = data[i].flight_id;
    
        // 将航班文本和航班详情添加到航班详情元素中
        stubFlight.appendChild(stubFlightText);
        stubFlight.appendChild(stubFlightDetail);
    
        // 创建座位详情元素
        var stubSeat = document.createElement('div');
        stubSeat.className = 'stub-seat';
    
        // 创建座位文本元素
        var stubSeatText = document.createElement('div');
        stubSeatText.className = 'smitem';
        stubSeatText.textContent = 'seat';
    
        // 创建座位详情元素
        var stubSeatDetail = document.createElement('div');
        stubSeatDetail.className = 'exsmdetail';
        stubSeatDetail.textContent = data[i].site;
    
        // 将座位文本和座位详情添加到座位详情元素中
        stubSeat.appendChild(stubSeatText);
        stubSeat.appendChild(stubSeatDetail);
    
        // 创建出发时间元素
        var stubDepart = document.createElement('div');
        stubDepart.className = 'stub-depart';
    
        // 创建出发时间文本元素
        var stubDepartText = document.createElement('div');
        stubDepartText.className = 'smitem';
        stubDepartText.textContent = 'day';
    
        // 创建出发时间详情元素
        var stubDepartDetail = document.createElement('div');
        stubDepartDetail.className = 'exsmdetail';
        stubDepartDetail.textContent = dateString;
    
        // 将出发时间文本和出发时间详情添加到出发时间元素中
        stubDepart.appendChild(stubDepartText);
        stubDepart.appendChild(stubDepartDetail);
    
        // 创建乘客姓名元素
        var stubPassenger = document.createElement('div');
        stubPassenger.className = 'stub-passenger';
    
        // 创建乘客姓名文本元素
        var stubPassengerText = document.createElement('div');
        stubPassengerText.className = 'smitem';
        stubPassengerText.textContent = 'passenger';
    
        // 创建乘客姓名详情元素
        var stubPassengerDetail = document.createElement('div');
        stubPassengerDetail.className = 'exsmdetail';
        stubPassengerDetail.textContent = data[i].username;
    
        // 将乘客姓名文本和乘客姓名详情添加到乘客姓名元素中
        stubPassenger.appendChild(stubPassengerText);
        stubPassenger.appendChild(stubPassengerDetail);
    
        // 创建条形码元素(传入一个10位数字)
        var barcode = document.createElement('div');
        barcode.className = 'barcode';
        barcode.textContent = data[i].barcode;
    
        // 将航班详情、座位详情、出发时间、乘客姓名和条形码添加到右侧部分元素中
        ticketRight.appendChild(stubFlight);
        ticketRight.appendChild(stubSeat);
        ticketRight.appendChild(stubDepart);
        ticketRight.appendChild(stubPassenger);
        ticketRight.appendChild(barcode);
    
        // 将左侧部分、中间部分和右侧部分添加到机票元素中
        ticket.appendChild(ticketLeft);
        ticket.appendChild(ticketMiddle);
        ticket.appendChild(ticketRight);
    
        ticket.style.background = ticketColorArray[i%ticketColorArray.length]
        // 将机票元素添加到机票容器中
        container.appendChild(ticket);
    }
  }

  

  function generateRandomBarcodeNumber() {
    var randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return randomNumber.toString();
  }
  
  
//渲染机票页面
window.onload = function() {
  count = 2;
  flag = -1;
  fetchFlightTicket();
};

function fetchFlightTicket(){
  var data= {
    token:token
  }
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://101.42.178.149/api/FlightInfo/showTickets', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        var responseData = JSON.parse(xhr.responseText);
        // console.log(responseData)
        drawTicket(responseData);
      } else {
        console.error('Request failed. Status: ' + xhr.status);
      }
  };
  xhr.send(JSON.stringify(data));
  console.log('count个数为:'+count)
}



  function formatTime(time) {
    var timeParts = time.split(":");
    var hour = parseInt(timeParts[0]);
    var minute = parseInt(timeParts[1]);
    
    // 处理小时
    var formattedHour = hour < 10 ? "0" + hour : hour.toString();
    
    // 处理分钟
    var formattedMinute = minute < 10 ? "0" + minute : minute.toString();
    
    // 返回格式化后的时间字符串
    return formattedHour + ":" + formattedMinute;
}