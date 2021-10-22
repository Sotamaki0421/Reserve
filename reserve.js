function reserve() {
    registCalenderEvent(name, myCalendar);
}

function registCalenderEvent(name, myCalendar) {
    //アクセス可能なカレンダーのIDを指定して、Googleカレンダーを取得する
    
    //Googleカレンダーに登録する日付を設定する
    let startTime = new Date();
    let endTime = new Date();
    let AddTime = 1;
    //createEventメソッドによる予定登録
    endTime.setHours(startTime.getHours() + AddTime)
    myCalendar.createEvent('予約1：' + name, startTime, endTime);

}


