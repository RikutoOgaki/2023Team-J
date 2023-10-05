import dayjs from 'dayjs'

export default function SampleForm0027() {
    return (
        <div>
            <p>日付操作(Day.js)</p>
            <a href='https://day.js.org/docs/en/installation/installation'>Day.js公式</a>

            <ul>
                <li>文字列→dayjs化→文字列: {dayjs('2023-01-01').format('YYYY-MM-DD')}</li>
                <li>文字列→dayjs化→文字列: {dayjs('2023-01-01 23:59:59').format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>文字列→dayjs化→Date型→文字列→dayjs化→文字列化: {dayjs(dayjs('2023-01-01 23:59:59.000').toDate()).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>日数加算: {dayjs('2023-01-01').add(7, 'day').format('YYYY-MM-DD')}</li>
                <li>日数減算: {dayjs('2023-01-01').subtract(7, 'day').format('YYYY-MM-DD')}</li>
                <li>日付設定(年): {dayjs('2023-01-15').year(2024).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>日付設定(月): {dayjs('2023-01-15').month(2).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>日付設定(日): {dayjs('2023-01-15').date(1).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>日付設定(時): {dayjs('2023-01-15').hour(13).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>日付設定(分): {dayjs('2023-01-15').minute(35).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>日付設定(秒): {dayjs('2023-01-15').second(16).format('YYYY-MM-DD HH:mm:ss')}</li>
                <li>比較(&gt;): {dayjs('2023-02-15').isBefore(dayjs('2023-02-16')) ? 'true' : 'false'}</li>
                <li>比較(&lt;): {dayjs('2023-02-15').isAfter(dayjs('2023-02-16')) ? 'true' : 'false'}</li>
                <li>比較(=): {dayjs('2023-02-15').isSame(dayjs('2023-02-15')) ? 'true' : 'false'}</li>
                <li>曜日取得: {dayjs('2023-01-15').day()}</li>
                <li>月日数: {dayjs('2023-01-15').daysInMonth()}</li>
                <li>差(日数): {dayjs('2023-01-15').diff(dayjs('2023-01-18'), 'day')}</li>
                <li>差(日数): {dayjs('2023-01-18').diff(dayjs('2023-01-15'), 'day')}</li>
                <li>差(月数): {dayjs('2023-01-15').diff(dayjs('2023-02-15'), 'month')}</li>
                <li>差(月数): {dayjs('2023-02-15').diff(dayjs('2023-01-15'), 'month')}</li>
                <li>差(年数): {dayjs('2022-01-15').diff(dayjs('2023-02-15'), 'year')}</li>
                <li>差(年数): {dayjs('2023-02-15').diff(dayjs('2022-01-15'), 'year')}</li>
                <li>複製: {dayjs('2023-01-15 23:59:59.999').clone().format('YYYY-MM-DD HH:mm:ss.SSS')}</li>
                <li>日時→Unixタイムスタンプ: {dayjs('2023-03-01 22:36:15.446').valueOf()}</li>
                <li>Unixタイムスタンプ→日時: {dayjs(1677677775446).format('YYYY-MM-DD HH:mm:ss.SSS')}</li>
            </ul>
        </div>
    )
}