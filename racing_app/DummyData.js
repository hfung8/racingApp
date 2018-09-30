const data = {
response: {
    version: '0.1',
    termsofService: 'http://www.wunderground.com/weather/api/d/terms.html',
    features: {
        conditions: 1,
        hourly: 1,
        forecast10day: 1,
    },
},
current_observation: {
    image: {
        url: 'http://icons.wxug.com/graphics/wu2/logo_130x80.png',
        title: 'Weather Underground',
        link: 'http://www.wunderground.com',
    },
    display_location: {
        full: 'Louisville, KY',
        city: 'Louisville',
        state: 'KY',
        state_name: 'Kentucky',
        country: 'US',
        country_iso3166: 'US',
        zip: '40201',
        magic: '1',
        wmo: '99999',
        latitude: '38.25000000',
        longitude: '-85.76000214',
        elevation: '128.0',
    },
    observation_location: {
        full: 'WAVE 3 News Weather Garden / 811 Call Before You Dig, Louisville, Kentucky',
        city: 'WAVE 3 News Weather Garden / 811 Call Before You Dig, Louisville',
        state: 'Kentucky',
        country: 'US',
        country_iso3166: 'US',
        latitude: '38.242832',
        longitude: '-85.749374',
        elevation: '459 ft',
    },
    estimated: {},
    station_id: 'KKYLOUIS193',
    observation_time: 'Last Updated on December 20, 11:27 AM EST',
    observation_time_rfc822: 'Wed, 20 Dec 2017 11:27:19 -0500',
    observation_epoch: '1513787239',
    local_time_rfc822: 'Wed, 20 Dec 2017 11:27:36 -0500',
    local_epoch: '1513787256',
    local_tz_short: 'EST',
    local_tz_long: 'America/New_York',
    local_tz_offset: '-0500',
    weather: 'Mostly Cloudy',
    temperature_string: '46.0 F (7.8 C)',
    temp_f: 46.0,
    temp_c: 7.8,
    relative_humidity: '65%',
    wind_string: 'From the NE at 1.0 MPH Gusting to 8.0 MPH',
    wind_dir: 'NE',
    wind_degrees: 51,
    wind_mph: 1.0,
    wind_gust_mph: '8.0',
    wind_kph: 1.6,
    wind_gust_kph: '12.9',
    pressure_mb: '1018',
    pressure_in: '30.06',
    pressure_trend: '-',
    dewpoint_string: '35 F (2 C)',
    dewpoint_f: 35,
    dewpoint_c: 2,
    heat_index_string: 'NA',
    heat_index_f: 'NA',
    heat_index_c: 'NA',
    windchill_string: '46 F (8 C)',
    windchill_f: '46',
    windchill_c: '8',
    feelslike_string: '46 F (8 C)',
    feelslike_f: '46',
    feelslike_c: '8',
    visibility_mi: '10.0',
    visibility_km: '16.1',
    solarradiation: '--',
    UV: '2',
    precip_1hr_string: '0.00 in ( 0 mm)',
    precip_1hr_in: '0.00',
    precip_1hr_metric: ' 0',
    precip_today_string: '0.00 in (0 mm)',
    precip_today_in: '0.00',
    precip_today_metric: '0',
    icon: 'mostlycloudy',
    icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
    forecast_url: 'http://www.wunderground.com/US/KY/Louisville.html',
    history_url: 'http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KKYLOUIS193',
    ob_url: 'http://www.wunderground.com/cgi-bin/findweather/getForecast?query=38.242832,-85.749374',
    nowcast: '',
},
forecast: {
    txt_forecast: {
        date: '10:29 AM EST',
        forecastday: [{
                period: 0,
                icon: 'partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                title: 'Wednesday',
                fcttext: 'Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.',
                fcttext_metric: 'Mostly cloudy skies this morning will become partly cloudy this afternoon. High 11C. Winds NE at 15 to 25 km/h.',
                pop: '0',
            },
            {
                period: 1,
                icon: 'nt_clear',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
                title: 'Wednesday Night',
                fcttext: 'Clear skies. Low 32F. Winds ENE at 5 to 10 mph.',
                fcttext_metric: 'Clear skies. Low around 0C. Winds ENE at 10 to 15 km/h.',
                pop: '0',
            },
            {
                period: 2,
                icon: 'clear',
                icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
                title: 'Thursday',
                fcttext: 'Sunshine and some clouds. High around 55F. Winds SE at 5 to 10 mph.',
                fcttext_metric: 'Generally sunny despite a few afternoon clouds. High 13C. Winds SSE at 10 to 15 km/h.',
                pop: '10',
            },
            {
                period: 3,
                icon: 'nt_chancerain',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_chancerain.gif',
                title: 'Thursday Night',
                fcttext: 'Cloudy in the evening, then off and on rain showers after midnight. Low 51F. Winds SSW at 5 to 10 mph. Chance of rain 40%.',
                fcttext_metric: 'Considerable cloudiness. Occasional rain showers later at night. Low 11C. Winds S at 10 to 15 km/h. Chance of rain 40%.',
                pop: '40',
            },
            {
                period: 4,
                icon: 'chancerain',
                icon_url: 'http://icons.wxug.com/i/c/k/chancerain.gif',
                title: 'Friday',
                fcttext: 'Cloudy in the morning, then off and on rain showers during the afternoon hours. High 57F. Winds SSW at 5 to 10 mph. Chance of rain 80%.',
                fcttext_metric: 'Cloudy with occasional showers for the afternoon. High 14C. Winds SSW at 10 to 15 km/h. Chance of rain 80%.',
                pop: '80',
            },
            {
                period: 5,
                icon: 'nt_rain',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_rain.gif',
                title: 'Friday Night',
                fcttext: 'Rain. Low 44F. ESE winds shifting to N at 10 to 15 mph. Chance of rain 100%. Rainfall near an inch. Locally heavy rainfall possible.',
                fcttext_metric: 'Cloudy with periods of rain. Low 7C. Winds NNE at 10 to 15 km/h. Chance of rain 100%. Rainfall near 25mm. Locally heavy rainfall possible.',
                pop: '100',
            },
            {
                period: 6,
                icon: 'rain',
                icon_url: 'http://icons.wxug.com/i/c/k/rain.gif',
                title: 'Saturday',
                fcttext: 'Cloudy with periods of rain. High 47F. Winds NNW at 10 to 15 mph. Chance of rain 90%. Rainfall around a quarter of an inch.',
                fcttext_metric: 'Periods of rain. High 9C. Winds NNW at 15 to 25 km/h. Chance of rain 90%. Rainfall near 6mm.',
                pop: '90',
            },
            {
                period: 7,
                icon: 'nt_cloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_cloudy.gif',
                title: 'Saturday Night',
                fcttext: 'Overcast. Low around 30F. Winds N at 5 to 10 mph.',
                fcttext_metric: 'Cloudy. Low -1C. Winds N at 10 to 15 km/h.',
                pop: '10',
            },
            {
                period: 8,
                icon: 'cloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
                title: 'Sunday',
                fcttext: 'Cloudy. A few flurries or snow showers possible. High 37F. Winds NNW at 5 to 10 mph.',
                fcttext_metric: 'Overcast. A few flurries or snow showers possible. High 3C. Winds NNW at 10 to 15 km/h.',
                pop: '20',
            },
            {
                period: 9,
                icon: 'nt_partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif',
                title: 'Sunday Night',
                fcttext: 'Mostly cloudy skies early, then partly cloudy after midnight. A few flurries or snow showers possible. Low 22F. Winds WNW at 10 to 20 mph.',
                fcttext_metric: 'Mostly cloudy skies early will become partly cloudy late. A few flurries or snow showers possible. Low around -5C. Winds WNW at 15 to 30 km/h.',
                pop: '20',
            },
            {
                period: 10,
                icon: 'clear',
                icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
                title: 'Monday',
                fcttext: 'Plentiful sunshine. High around 35F. Winds WSW at 10 to 20 mph.',
                fcttext_metric: 'Generally sunny. High 2C. Winds WSW at 15 to 30 km/h.',
                pop: '0',
            },
            {
                period: 11,
                icon: 'nt_partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif',
                title: 'Monday Night',
                fcttext: 'Partly cloudy early with increasing clouds overnight. Low 19F. Winds WSW at 5 to 10 mph.',
                fcttext_metric: 'Partly cloudy early with increasing clouds overnight. Low -7C. Winds WSW at 10 to 15 km/h.',
                pop: '0',
            },
            {
                period: 12,
                icon: 'partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                title: 'Tuesday',
                fcttext: 'Sunshine and clouds mixed. High 32F. Winds WNW at 5 to 10 mph.',
                fcttext_metric: 'Partly cloudy. High near 0C. Winds light and variable.',
                pop: '0',
            },
            {
                period: 13,
                icon: 'nt_clear',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
                title: 'Tuesday Night',
                fcttext: 'A few clouds overnight. Low around 20F. Winds N at 5 to 10 mph.',
                fcttext_metric: 'A few clouds overnight. Low -6C. Winds N at 10 to 15 km/h.',
                pop: '0',
            },
            {
                period: 14,
                icon: 'partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                title: 'Wednesday',
                fcttext: 'Intervals of clouds and sunshine. High 33F. Winds light and variable.',
                fcttext_metric: 'Partly cloudy skies. High 1C. Winds light and variable.',
                pop: '10',
            },
            {
                period: 15,
                icon: 'nt_chancesnow',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_chancesnow.gif',
                title: 'Wednesday Night',
                fcttext: 'Cloudy skies with late-night snow showers. Low 26F. Winds light and variable. Chance of snow 40%. Snowfall around one inch.',
                fcttext_metric: 'Cloudy with snow showers developing after midnight. Low -3C. Winds light and variable. Chance of snow 40%. Snowfall of 2-3cm.',
                pop: '40',
            },
            {
                period: 16,
                icon: 'snow',
                icon_url: 'http://icons.wxug.com/i/c/k/snow.gif',
                title: 'Thursday',
                fcttext: 'Cloudy with snow showers mainly during the morning. High near 35F. Winds NNE at 5 to 10 mph. Chance of snow 40%. About one inch of snow expected.',
                fcttext_metric: 'Mainly cloudy with snow showers around in the morning. High 2C. Winds NNE at 10 to 15 km/h. Chance of snow 40%. 2-3cm of snow expected.',
                pop: '40',
            },
            {
                period: 17,
                icon: 'nt_cloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_cloudy.gif',
                title: 'Thursday Night',
                fcttext: 'Cloudy. Low 23F. Winds N at 5 to 10 mph.',
                fcttext_metric: 'Cloudy. Low around -5C. Winds N at 10 to 15 km/h.',
                pop: '20',
            },
            {
                period: 18,
                icon: 'partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                title: 'Friday',
                fcttext: 'Partly cloudy skies. High 31F. Winds W at 5 to 10 mph.',
                fcttext_metric: 'Partly cloudy skies. High -1C. Winds W at 10 to 15 km/h.',
                pop: '20',
            },
            {
                period: 19,
                icon: 'nt_chancesnow',
                icon_url: 'http://icons.wxug.com/i/c/k/nt_chancesnow.gif',
                title: 'Friday Night',
                fcttext: 'Cloudy. Snow showers developing after midnight. Low 18F. Winds ENE at 5 to 10 mph. Chance of snow 40%. About one inch of snow expected.',
                fcttext_metric: 'Cloudy with snow showers developing after midnight. Low -7C. Winds ENE at 10 to 15 km/h. Chance of snow 40%. Snowfall of 2-3cm.',
                pop: '40',
            },
        ],
    },
    simpleforecast: {
        forecastday: [{
                date: {
                    epoch: '1513814400',
                    pretty: '7:00 PM EST on December 20, 2017',
                    day: 20,
                    month: 12,
                    year: 2017,
                    yday: 353,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Wed',
                    weekday: 'Wednesday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 1,
                high: {
                    fahrenheit: '51',
                    celsius: '11',
                },
                low: {
                    fahrenheit: '32',
                    celsius: '0',
                },
                conditions: 'Partly Cloudy',
                icon: 'partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                skyicon: '',
                pop: 0,
                qpf_allday: { in: 0.0,
                    mm: 0,
                },
                qpf_day: { in: 0.0,
                    mm: 0,
                },
                qpf_night: { in: 0.0,
                    mm: 0,
                },
                snow_allday: { in: 0.0,
                    cm: 0.0,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 0.0,
                    cm: 0.0,
                },
                maxwind: {
                    mph: 15,
                    kph: 24,
                    dir: 'NE',
                    degrees: 42,
                },
                avewind: {
                    mph: 11,
                    kph: 18,
                    dir: 'NE',
                    degrees: 42,
                },
                avehumidity: 48,
                maxhumidity: 62,
                minhumidity: 36,
            },
            {
                date: {
                    epoch: '1513900800',
                    pretty: '7:00 PM EST on December 21, 2017',
                    day: 21,
                    month: 12,
                    year: 2017,
                    yday: 354,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Thu',
                    weekday: 'Thursday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 2,
                high: {
                    fahrenheit: '55',
                    celsius: '13',
                },
                low: {
                    fahrenheit: '51',
                    celsius: '11',
                },
                conditions: 'Clear',
                icon: 'clear',
                icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
                skyicon: '',
                pop: 10,
                qpf_allday: { in: 0.02,
                    mm: 1,
                },
                qpf_day: { in: 0.0,
                    mm: 0,
                },
                qpf_night: { in: 0.02,
                    mm: 1,
                },
                snow_allday: { in: 0.0,
                    cm: 0.0,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 0.0,
                    cm: 0.0,
                },
                maxwind: {
                    mph: 10,
                    kph: 16,
                    dir: 'SE',
                    degrees: 146,
                },
                avewind: {
                    mph: 7,
                    kph: 11,
                    dir: 'SE',
                    degrees: 146,
                },
                avehumidity: 65,
                maxhumidity: 76,
                minhumidity: 54,
            },
            {
                date: {
                    epoch: '1513987200',
                    pretty: '7:00 PM EST on December 22, 2017',
                    day: 22,
                    month: 12,
                    year: 2017,
                    yday: 355,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Fri',
                    weekday: 'Friday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 3,
                high: {
                    fahrenheit: '57',
                    celsius: '14',
                },
                low: {
                    fahrenheit: '44',
                    celsius: '7',
                },
                conditions: 'Chance of Rain',
                icon: 'chancerain',
                icon_url: 'http://icons.wxug.com/i/c/k/chancerain.gif',
                skyicon: '',
                pop: 80,
                qpf_allday: { in: 0.91,
                    mm: 23,
                },
                qpf_day: { in: 0.07,
                    mm: 2,
                },
                qpf_night: { in: 0.84,
                    mm: 21,
                },
                snow_allday: { in: 0.0,
                    cm: 0.0,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 0.0,
                    cm: 0.0,
                },
                maxwind: {
                    mph: 10,
                    kph: 16,
                    dir: 'SSW',
                    degrees: 202,
                },
                avewind: {
                    mph: 9,
                    kph: 14,
                    dir: 'SSW',
                    degrees: 202,
                },
                avehumidity: 84,
                maxhumidity: 89,
                minhumidity: 78,
            },
            {
                date: {
                    epoch: '1514073600',
                    pretty: '7:00 PM EST on December 23, 2017',
                    day: 23,
                    month: 12,
                    year: 2017,
                    yday: 356,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Sat',
                    weekday: 'Saturday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 4,
                high: {
                    fahrenheit: '47',
                    celsius: '8',
                },
                low: {
                    fahrenheit: '30',
                    celsius: '-1',
                },
                conditions: 'Rain',
                icon: 'rain',
                icon_url: 'http://icons.wxug.com/i/c/k/rain.gif',
                skyicon: '',
                pop: 90,
                qpf_allday: { in: 0.37,
                    mm: 9,
                },
                qpf_day: { in: 0.37,
                    mm: 9,
                },
                qpf_night: { in: 0.0,
                    mm: 0,
                },
                snow_allday: { in: 0.0,
                    cm: 0.0,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 0.0,
                    cm: 0.0,
                },
                maxwind: {
                    mph: 15,
                    kph: 24,
                    dir: 'NNW',
                    degrees: 345,
                },
                avewind: {
                    mph: 11,
                    kph: 18,
                    dir: 'NNW',
                    degrees: 345,
                },
                avehumidity: 81,
                maxhumidity: 90,
                minhumidity: 75,
            },
            {
                date: {
                    epoch: '1514160000',
                    pretty: '7:00 PM EST on December 24, 2017',
                    day: 24,
                    month: 12,
                    year: 2017,
                    yday: 357,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Sun',
                    weekday: 'Sunday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 5,
                high: {
                    fahrenheit: '37',
                    celsius: '3',
                },
                low: {
                    fahrenheit: '22',
                    celsius: '-6',
                },
                conditions: 'Overcast',
                icon: 'cloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
                skyicon: '',
                pop: 20,
                qpf_allday: { in: 0.0,
                    mm: 0,
                },
                qpf_day: { in: 0.0,
                    mm: 0,
                },
                qpf_night: { in: 0.0,
                    mm: 0,
                },
                snow_allday: { in: 0.0,
                    cm: 0.0,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 0.0,
                    cm: 0.0,
                },
                maxwind: {
                    mph: 10,
                    kph: 16,
                    dir: 'NNW',
                    degrees: 333,
                },
                avewind: {
                    mph: 9,
                    kph: 14,
                    dir: 'NNW',
                    degrees: 333,
                },
                avehumidity: 64,
                maxhumidity: 77,
                minhumidity: 54,
            },
            {
                date: {
                    epoch: '1514246400',
                    pretty: '7:00 PM EST on December 25, 2017',
                    day: 25,
                    month: 12,
                    year: 2017,
                    yday: 358,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Mon',
                    weekday: 'Monday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 6,
                high: {
                    fahrenheit: '35',
                    celsius: '2',
                },
                low: {
                    fahrenheit: '19',
                    celsius: '-7',
                },
                conditions: 'Clear',
                icon: 'clear',
                icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
                skyicon: '',
                pop: 0,
                qpf_allday: { in: 0.0,
                    mm: 0,
                },
                qpf_day: { in: 0.0,
                    mm: 0,
                },
                qpf_night: { in: 0.0,
                    mm: 0,
                },
                snow_allday: { in: 0.0,
                    cm: 0.0,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 0.0,
                    cm: 0.0,
                },
                maxwind: {
                    mph: 20,
                    kph: 32,
                    dir: 'WSW',
                    degrees: 252,
                },
                avewind: {
                    mph: 13,
                    kph: 21,
                    dir: 'WSW',
                    degrees: 252,
                },
                avehumidity: 43,
                maxhumidity: 61,
                minhumidity: 30,
            },
            {
                date: {
                    epoch: '1514332800',
                    pretty: '7:00 PM EST on December 26, 2017',
                    day: 26,
                    month: 12,
                    year: 2017,
                    yday: 359,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Tue',
                    weekday: 'Tuesday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 7,
                high: {
                    fahrenheit: '32',
                    celsius: '0',
                },
                low: {
                    fahrenheit: '20',
                    celsius: '-7',
                },
                conditions: 'Partly Cloudy',
                icon: 'partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                skyicon: '',
                pop: 0,
                qpf_allday: { in: 0.0,
                    mm: 0,
                },
                qpf_day: { in: 0.0,
                    mm: 0,
                },
                qpf_night: { in: 0.0,
                    mm: 0,
                },
                snow_allday: { in: 0.0,
                    cm: 0.0,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 0.0,
                    cm: 0.0,
                },
                maxwind: {
                    mph: 10,
                    kph: 16,
                    dir: 'WNW',
                    degrees: 285,
                },
                avewind: {
                    mph: 6,
                    kph: 10,
                    dir: 'WNW',
                    degrees: 285,
                },
                avehumidity: 41,
                maxhumidity: 56,
                minhumidity: 31,
            },
            {
                date: {
                    epoch: '1514419200',
                    pretty: '7:00 PM EST on December 27, 2017',
                    day: 27,
                    month: 12,
                    year: 2017,
                    yday: 360,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Wed',
                    weekday: 'Wednesday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 8,
                high: {
                    fahrenheit: '33',
                    celsius: '1',
                },
                low: {
                    fahrenheit: '26',
                    celsius: '-3',
                },
                conditions: 'Partly Cloudy',
                icon: 'partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                skyicon: '',
                pop: 10,
                qpf_allday: { in: 0.11,
                    mm: 3,
                },
                qpf_day: { in: 0.0,
                    mm: 0,
                },
                qpf_night: { in: 0.11,
                    mm: 3,
                },
                snow_allday: { in: 1.1,
                    cm: 2.8,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 1.1,
                    cm: 2.8,
                },
                maxwind: {
                    mph: 10,
                    kph: 16,
                    dir: 'ENE',
                    degrees: 76,
                },
                avewind: {
                    mph: 5,
                    kph: 8,
                    dir: 'ENE',
                    degrees: 76,
                },
                avehumidity: 35,
                maxhumidity: 42,
                minhumidity: 27,
            },
            {
                date: {
                    epoch: '1514505600',
                    pretty: '7:00 PM EST on December 28, 2017',
                    day: 28,
                    month: 12,
                    year: 2017,
                    yday: 361,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Thu',
                    weekday: 'Thursday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 9,
                high: {
                    fahrenheit: '35',
                    celsius: '2',
                },
                low: {
                    fahrenheit: '23',
                    celsius: '-5',
                },
                conditions: 'Snow Showers',
                icon: 'snow',
                icon_url: 'http://icons.wxug.com/i/c/k/snow.gif',
                skyicon: '',
                pop: 40,
                qpf_allday: { in: 0.09,
                    mm: 2,
                },
                qpf_day: { in: 0.09,
                    mm: 2,
                },
                qpf_night: { in: 0.0,
                    mm: 0,
                },
                snow_allday: { in: 0.9,
                    cm: 2.3,
                },
                snow_day: { in: 0.9,
                    cm: 2.3,
                },
                snow_night: { in: 0.0,
                    cm: 0.0,
                },
                maxwind: {
                    mph: 10,
                    kph: 16,
                    dir: 'NNE',
                    degrees: 27,
                },
                avewind: {
                    mph: 6,
                    kph: 10,
                    dir: 'NNE',
                    degrees: 27,
                },
                avehumidity: 50,
                maxhumidity: 60,
                minhumidity: 41,
            },
            {
                date: {
                    epoch: '1514592000',
                    pretty: '7:00 PM EST on December 29, 2017',
                    day: 29,
                    month: 12,
                    year: 2017,
                    yday: 362,
                    hour: 19,
                    min: '00',
                    sec: 0,
                    isdst: '0',
                    monthname: 'December',
                    monthname_short: 'Dec',
                    weekday_short: 'Fri',
                    weekday: 'Friday',
                    ampm: 'PM',
                    tz_short: 'EST',
                    tz_long: 'America/New_York',
                },
                period: 10,
                high: {
                    fahrenheit: '31',
                    celsius: '-1',
                },
                low: {
                    fahrenheit: '18',
                    celsius: '-8',
                },
                conditions: 'Partly Cloudy',
                icon: 'partlycloudy',
                icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                skyicon: '',
                pop: 20,
                qpf_allday: { in: 0.07,
                    mm: 2,
                },
                qpf_day: { in: 0.0,
                    mm: 0,
                },
                qpf_night: { in: 0.07,
                    mm: 2,
                },
                snow_allday: { in: 0.9,
                    cm: 2.3,
                },
                snow_day: { in: 0.0,
                    cm: 0.0,
                },
                snow_night: { in: 0.9,
                    cm: 2.3,
                },
                maxwind: {
                    mph: 10,
                    kph: 16,
                    dir: 'W',
                    degrees: 274,
                },
                avewind: {
                    mph: 7,
                    kph: 11,
                    dir: 'W',
                    degrees: 274,
                },
                avehumidity: 64,
                maxhumidity: 87,
                minhumidity: 51,
            },
        ],
    },
},
hourly_forecast: [{
        FCTTIME: {
            hour: '12',
            hour_padded: '12',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513789200',
            pretty: '12:00 PM EST on December 20, 2017',
            civil: '12:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '47',
            metric: '8'
        },
        dewpoint: {
            english: '30',
            metric: '-1'
        },
        condition: 'Partly Cloudy',
        icon: 'partlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        fctcode: '2',
        sky: '59',
        wspd: {
            english: '11',
            metric: '18'
        },
        wdir: {
            dir: 'NE',
            degrees: '48'
        },
        wx: 'Partly Cloudy',
        uvi: '1',
        humidity: '53',
        windchill: {
            english: '41',
            metric: '5'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '41',
            metric: '5'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.05',
            metric: '1018'
        },
    },
    {
        FCTTIME: {
            hour: '13',
            hour_padded: '13',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513792800',
            pretty: '1:00 PM EST on December 20, 2017',
            civil: '1:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '49',
            metric: '9'
        },
        dewpoint: {
            english: '29',
            metric: '-2'
        },
        condition: 'Partly Cloudy',
        icon: 'partlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        fctcode: '2',
        sky: '54',
        wspd: {
            english: '11',
            metric: '18'
        },
        wdir: {
            dir: 'NE',
            degrees: '43'
        },
        wx: 'Partly Cloudy',
        uvi: '2',
        humidity: '47',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '49',
            metric: '9'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.04',
            metric: '1017'
        },
    },
    {
        FCTTIME: {
            hour: '14',
            hour_padded: '14',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513796400',
            pretty: '2:00 PM EST on December 20, 2017',
            civil: '2:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '49',
            metric: '9'
        },
        dewpoint: {
            english: '27',
            metric: '-3'
        },
        condition: 'Partly Cloudy',
        icon: 'partlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        fctcode: '2',
        sky: '45',
        wspd: {
            english: '11',
            metric: '18'
        },
        wdir: {
            dir: 'NE',
            degrees: '42'
        },
        wx: 'Partly Cloudy',
        uvi: '2',
        humidity: '41',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '49',
            metric: '9'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.03',
            metric: '1017'
        },
    },
    {
        FCTTIME: {
            hour: '15',
            hour_padded: '15',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513800000',
            pretty: '3:00 PM EST on December 20, 2017',
            civil: '3:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '51',
            metric: '11'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '29',
        wspd: {
            english: '9',
            metric: '14'
        },
        wdir: {
            dir: 'NE',
            degrees: '41'
        },
        wx: 'Mostly Sunny',
        uvi: '1',
        humidity: '37',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '51',
            metric: '11'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.03',
            metric: '1017'
        },
    },
    {
        FCTTIME: {
            hour: '16',
            hour_padded: '16',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513803600',
            pretty: '4:00 PM EST on December 20, 2017',
            civil: '4:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '50',
            metric: '10'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '17',
        wspd: {
            english: '9',
            metric: '14'
        },
        wdir: {
            dir: 'NE',
            degrees: '40'
        },
        wx: 'Sunny',
        uvi: '0',
        humidity: '36',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '50',
            metric: '10'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.03',
            metric: '1017'
        },
    },
    {
        FCTTIME: {
            hour: '17',
            hour_padded: '17',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513807200',
            pretty: '5:00 PM EST on December 20, 2017',
            civil: '5:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '48',
            metric: '9'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '10',
        wspd: {
            english: '9',
            metric: '14'
        },
        wdir: {
            dir: 'NE',
            degrees: '38'
        },
        wx: 'Sunny',
        uvi: '0',
        humidity: '40',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '48',
            metric: '9'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.03',
            metric: '1017'
        },
    },
    {
        FCTTIME: {
            hour: '18',
            hour_padded: '18',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513810800',
            pretty: '6:00 PM EST on December 20, 2017',
            civil: '6:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '45',
            metric: '7'
        },
        dewpoint: {
            english: '26',
            metric: '-3'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '7',
        wspd: {
            english: '7',
            metric: '11'
        },
        wdir: {
            dir: 'NE',
            degrees: '38'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '47',
        windchill: {
            english: '41',
            metric: '5'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '41',
            metric: '5'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.04',
            metric: '1017'
        },
    },
    {
        FCTTIME: {
            hour: '19',
            hour_padded: '19',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513814400',
            pretty: '7:00 PM EST on December 20, 2017',
            civil: '7:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '43',
            metric: '6'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '6',
        wspd: {
            english: '7',
            metric: '11'
        },
        wdir: {
            dir: 'NE',
            degrees: '39'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '50',
        windchill: {
            english: '39',
            metric: '4'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '39',
            metric: '4'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.05',
            metric: '1018'
        },
    },
    {
        FCTTIME: {
            hour: '20',
            hour_padded: '20',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513818000',
            pretty: '8:00 PM EST on December 20, 2017',
            civil: '8:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '41',
            metric: '5'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '0',
        wspd: {
            english: '6',
            metric: '10'
        },
        wdir: {
            dir: 'NE',
            degrees: '40'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '52',
        windchill: {
            english: '37',
            metric: '3'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '37',
            metric: '3'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '1',
        mslp: {
            english: '30.06',
            metric: '1018'
        },
    },
    {
        FCTTIME: {
            hour: '21',
            hour_padded: '21',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513821600',
            pretty: '9:00 PM EST on December 20, 2017',
            civil: '9:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '39',
            metric: '4'
        },
        dewpoint: {
            english: '24',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '0',
        wspd: {
            english: '6',
            metric: '10'
        },
        wdir: {
            dir: 'NE',
            degrees: '44'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '54',
        windchill: {
            english: '35',
            metric: '2'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '35',
            metric: '2'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '1',
        mslp: {
            english: '30.07',
            metric: '1018'
        },
    },
    {
        FCTTIME: {
            hour: '22',
            hour_padded: '22',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513825200',
            pretty: '10:00 PM EST on December 20, 2017',
            civil: '10:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '38',
            metric: '3'
        },
        dewpoint: {
            english: '24',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '0',
        wspd: {
            english: '6',
            metric: '10'
        },
        wdir: {
            dir: 'NE',
            degrees: '48'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '56',
        windchill: {
            english: '33',
            metric: '0'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '33',
            metric: '0'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '1',
        mslp: {
            english: '30.08',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '23',
            hour_padded: '23',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '20',
            mday_padded: '20',
            yday: '353',
            isdst: '0',
            epoch: '1513828800',
            pretty: '11:00 PM EST on December 20, 2017',
            civil: '11:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Wednesday',
            weekday_name_night: 'Wednesday Night',
            weekday_name_abbrev: 'Wed',
            weekday_name_unlang: 'Wednesday',
            weekday_name_night_unlang: 'Wednesday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '37',
            metric: '3'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '0',
        wspd: {
            english: '4',
            metric: '6'
        },
        wdir: {
            dir: 'ENE',
            degrees: '57'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '60',
        windchill: {
            english: '34',
            metric: '1'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '34',
            metric: '1'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '2',
        mslp: {
            english: '30.08',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '0',
            hour_padded: '00',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513832400',
            pretty: '12:00 AM EST on December 21, 2017',
            civil: '12:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '37',
            metric: '3'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '0',
        wspd: {
            english: '4',
            metric: '6'
        },
        wdir: {
            dir: 'ENE',
            degrees: '61'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '61',
        windchill: {
            english: '34',
            metric: '1'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '34',
            metric: '1'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '2',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '1',
            hour_padded: '01',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513836000',
            pretty: '1:00 AM EST on December 21, 2017',
            civil: '1:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '36',
            metric: '2'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '0',
        wspd: {
            english: '4',
            metric: '6'
        },
        wdir: {
            dir: 'ENE',
            degrees: '65'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '62',
        windchill: {
            english: '32',
            metric: '0'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '32',
            metric: '0'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '2',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '2',
            hour_padded: '02',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513839600',
            pretty: '2:00 AM EST on December 21, 2017',
            civil: '2:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '36',
            metric: '2'
        },
        dewpoint: {
            english: '24',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '0',
        wspd: {
            english: '4',
            metric: '6'
        },
        wdir: {
            dir: 'ENE',
            degrees: '73'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '64',
        windchill: {
            english: '32',
            metric: '0'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '32',
            metric: '0'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '2',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '3',
            hour_padded: '03',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513843200',
            pretty: '3:00 AM EST on December 21, 2017',
            civil: '3:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '35',
            metric: '2'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '1',
        wspd: {
            english: '4',
            metric: '6'
        },
        wdir: {
            dir: 'ENE',
            degrees: '64'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '66',
        windchill: {
            english: '32',
            metric: '0'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '32',
            metric: '0'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '2',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '4',
            hour_padded: '04',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513846800',
            pretty: '4:00 AM EST on December 21, 2017',
            civil: '4:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '34',
            metric: '1'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '1',
        wspd: {
            english: '3',
            metric: '5'
        },
        wdir: {
            dir: 'ENE',
            degrees: '66'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '68',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '34',
            metric: '1'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '2',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '5',
            hour_padded: '05',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513850400',
            pretty: '5:00 AM EST on December 21, 2017',
            civil: '5:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '34',
            metric: '1'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '1',
        wspd: {
            english: '3',
            metric: '5'
        },
        wdir: {
            dir: 'ENE',
            degrees: '72'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '70',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '34',
            metric: '1'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '3',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '6',
            hour_padded: '06',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513854000',
            pretty: '6:00 AM EST on December 21, 2017',
            civil: '6:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '33',
            metric: '1'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '2',
        wspd: {
            english: '3',
            metric: '5'
        },
        wdir: {
            dir: 'ENE',
            degrees: '73'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '71',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '33',
            metric: '1'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '3',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '7',
            hour_padded: '07',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513857600',
            pretty: '7:00 AM EST on December 21, 2017',
            civil: '7:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '33',
            metric: '1'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        fctcode: '1',
        sky: '2',
        wspd: {
            english: '3',
            metric: '5'
        },
        wdir: {
            dir: 'E',
            degrees: '80'
        },
        wx: 'Clear',
        uvi: '0',
        humidity: '72',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '33',
            metric: '1'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '3',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '8',
            hour_padded: '08',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513861200',
            pretty: '8:00 AM EST on December 21, 2017',
            civil: '8:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '34',
            metric: '1'
        },
        dewpoint: {
            english: '25',
            metric: '-4'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '3',
        wspd: {
            english: '3',
            metric: '5'
        },
        wdir: {
            dir: 'ENE',
            degrees: '77'
        },
        wx: 'Sunny',
        uvi: '0',
        humidity: '70',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '34',
            metric: '1'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '3',
        mslp: {
            english: '30.1',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '9',
            hour_padded: '09',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513864800',
            pretty: '9:00 AM EST on December 21, 2017',
            civil: '9:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '36',
            metric: '2'
        },
        dewpoint: {
            english: '26',
            metric: '-3'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '2',
        wspd: {
            english: '3',
            metric: '5'
        },
        wdir: {
            dir: 'E',
            degrees: '90'
        },
        wx: 'Sunny',
        uvi: '0',
        humidity: '67',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '36',
            metric: '2'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '1',
        mslp: {
            english: '30.1',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '10',
            hour_padded: '10',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513868400',
            pretty: '10:00 AM EST on December 21, 2017',
            civil: '10:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '40',
            metric: '4'
        },
        dewpoint: {
            english: '26',
            metric: '-3'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '3',
        wspd: {
            english: '5',
            metric: '8'
        },
        wdir: {
            dir: 'ESE',
            degrees: '116'
        },
        wx: 'Sunny',
        uvi: '1',
        humidity: '59',
        windchill: {
            english: '36',
            metric: '2'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '36',
            metric: '2'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.1',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '11',
            hour_padded: '11',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513872000',
            pretty: '11:00 AM EST on December 21, 2017',
            civil: '11:00 AM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'AM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '43',
            metric: '6'
        },
        dewpoint: {
            english: '28',
            metric: '-2'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '10',
        wspd: {
            english: '6',
            metric: '10'
        },
        wdir: {
            dir: 'SE',
            degrees: '133'
        },
        wx: 'Sunny',
        uvi: '1',
        humidity: '54',
        windchill: {
            english: '39',
            metric: '4'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '39',
            metric: '4'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.09',
            metric: '1019'
        },
    },
    {
        FCTTIME: {
            hour: '12',
            hour_padded: '12',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513875600',
            pretty: '12:00 PM EST on December 21, 2017',
            civil: '12:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '46',
            metric: '8'
        },
        dewpoint: {
            english: '31',
            metric: '-1'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '14',
        wspd: {
            english: '6',
            metric: '10'
        },
        wdir: {
            dir: 'SSE',
            degrees: '150'
        },
        wx: 'Sunny',
        uvi: '2',
        humidity: '55',
        windchill: {
            english: '43',
            metric: '6'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '43',
            metric: '6'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.07',
            metric: '1018'
        },
    },
    {
        FCTTIME: {
            hour: '13',
            hour_padded: '13',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513879200',
            pretty: '1:00 PM EST on December 21, 2017',
            civil: '1:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '50',
            metric: '10'
        },
        dewpoint: {
            english: '34',
            metric: '1'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '17',
        wspd: {
            english: '7',
            metric: '11'
        },
        wdir: {
            dir: 'SSE',
            degrees: '164'
        },
        wx: 'Sunny',
        uvi: '2',
        humidity: '55',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '50',
            metric: '10'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '0',
        mslp: {
            english: '30.04',
            metric: '1017'
        },
    },
    {
        FCTTIME: {
            hour: '14',
            hour_padded: '14',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513882800',
            pretty: '2:00 PM EST on December 21, 2017',
            civil: '2:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '52',
            metric: '11'
        },
        dewpoint: {
            english: '37',
            metric: '3'
        },
        condition: 'Clear',
        icon: 'clear',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        fctcode: '1',
        sky: '23',
        wspd: {
            english: '8',
            metric: '13'
        },
        wdir: {
            dir: 'S',
            degrees: '178'
        },
        wx: 'Mostly Sunny',
        uvi: '2',
        humidity: '56',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '52',
            metric: '11'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '1',
        mslp: {
            english: '30.02',
            metric: '1017'
        },
    },
    {
        FCTTIME: {
            hour: '15',
            hour_padded: '15',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513886400',
            pretty: '3:00 PM EST on December 21, 2017',
            civil: '3:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '53',
            metric: '12'
        },
        dewpoint: {
            english: '39',
            metric: '4'
        },
        condition: 'Partly Cloudy',
        icon: 'partlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        fctcode: '2',
        sky: '34',
        wspd: {
            english: '7',
            metric: '11'
        },
        wdir: {
            dir: 'S',
            degrees: '186'
        },
        wx: 'Partly Cloudy',
        uvi: '1',
        humidity: '57',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '53',
            metric: '12'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '2',
        mslp: {
            english: '30.0',
            metric: '1016'
        },
    },
    {
        FCTTIME: {
            hour: '16',
            hour_padded: '16',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513890000',
            pretty: '4:00 PM EST on December 21, 2017',
            civil: '4:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '53',
            metric: '12'
        },
        dewpoint: {
            english: '41',
            metric: '5'
        },
        condition: 'Partly Cloudy',
        icon: 'partlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        fctcode: '2',
        sky: '35',
        wspd: {
            english: '8',
            metric: '13'
        },
        wdir: {
            dir: 'S',
            degrees: '187'
        },
        wx: 'Partly Cloudy',
        uvi: '0',
        humidity: '63',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '53',
            metric: '12'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '4',
        mslp: {
            english: '29.99',
            metric: '1016'
        },
    },
    {
        FCTTIME: {
            hour: '17',
            hour_padded: '17',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513893600',
            pretty: '5:00 PM EST on December 21, 2017',
            civil: '5:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '52',
            metric: '11'
        },
        dewpoint: {
            english: '42',
            metric: '6'
        },
        condition: 'Partly Cloudy',
        icon: 'partlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        fctcode: '2',
        sky: '46',
        wspd: {
            english: '7',
            metric: '11'
        },
        wdir: {
            dir: 'S',
            degrees: '183'
        },
        wx: 'Partly Cloudy',
        uvi: '0',
        humidity: '68',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '52',
            metric: '11'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '7',
        mslp: {
            english: '29.99',
            metric: '1016'
        },
    },
    {
        FCTTIME: {
            hour: '18',
            hour_padded: '18',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513897200',
            pretty: '6:00 PM EST on December 21, 2017',
            civil: '6:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '52',
            metric: '11'
        },
        dewpoint: {
            english: '43',
            metric: '6'
        },
        condition: 'Mostly Cloudy',
        icon: 'mostlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif',
        fctcode: '3',
        sky: '63',
        wspd: {
            english: '6',
            metric: '10'
        },
        wdir: {
            dir: 'S',
            degrees: '180'
        },
        wx: 'Mostly Cloudy',
        uvi: '0',
        humidity: '71',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '52',
            metric: '11'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '9',
        mslp: {
            english: '30.0',
            metric: '1016'
        },
    },
    {
        FCTTIME: {
            hour: '19',
            hour_padded: '19',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513900800',
            pretty: '7:00 PM EST on December 21, 2017',
            civil: '7:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '52',
            metric: '11'
        },
        dewpoint: {
            english: '44',
            metric: '7'
        },
        condition: 'Mostly Cloudy',
        icon: 'mostlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif',
        fctcode: '3',
        sky: '75',
        wspd: {
            english: '6',
            metric: '10'
        },
        wdir: {
            dir: 'S',
            degrees: '177'
        },
        wx: 'Mostly Cloudy',
        uvi: '0',
        humidity: '73',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '52',
            metric: '11'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '10',
        mslp: {
            english: '30.0',
            metric: '1016'
        },
    },
    {
        FCTTIME: {
            hour: '20',
            hour_padded: '20',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513904400',
            pretty: '8:00 PM EST on December 21, 2017',
            civil: '8:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '52',
            metric: '11'
        },
        dewpoint: {
            english: '44',
            metric: '7'
        },
        condition: 'Overcast',
        icon: 'cloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_cloudy.gif',
        fctcode: '4',
        sky: '94',
        wspd: {
            english: '7',
            metric: '11'
        },
        wdir: {
            dir: 'S',
            degrees: '180'
        },
        wx: 'Cloudy',
        uvi: '0',
        humidity: '73',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '52',
            metric: '11'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '14',
        mslp: {
            english: '30.0',
            metric: '1016'
        },
    },
    {
        FCTTIME: {
            hour: '21',
            hour_padded: '21',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513908000',
            pretty: '9:00 PM EST on December 21, 2017',
            civil: '9:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '53',
            metric: '12'
        },
        dewpoint: {
            english: '44',
            metric: '7'
        },
        condition: 'Overcast',
        icon: 'cloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_cloudy.gif',
        fctcode: '4',
        sky: '92',
        wspd: {
            english: '7',
            metric: '11'
        },
        wdir: {
            dir: 'S',
            degrees: '187'
        },
        wx: 'Cloudy',
        uvi: '0',
        humidity: '70',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '53',
            metric: '12'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '16',
        mslp: {
            english: '30.0',
            metric: '1016'
        },
    },
    {
        FCTTIME: {
            hour: '22',
            hour_padded: '22',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513911600',
            pretty: '10:00 PM EST on December 21, 2017',
            civil: '10:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '53',
            metric: '12'
        },
        dewpoint: {
            english: '45',
            metric: '7'
        },
        condition: 'Overcast',
        icon: 'cloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_cloudy.gif',
        fctcode: '4',
        sky: '92',
        wspd: {
            english: '8',
            metric: '13'
        },
        wdir: {
            dir: 'S',
            degrees: '191'
        },
        wx: 'Cloudy',
        uvi: '0',
        humidity: '73',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '53',
            metric: '12'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '24',
        mslp: {
            english: '30.0',
            metric: '1016'
        },
    },
    {
        FCTTIME: {
            hour: '23',
            hour_padded: '23',
            min: '00',
            min_unpadded: '0',
            sec: '0',
            year: '2017',
            mon: '12',
            mon_padded: '12',
            mon_abbrev: 'Dec',
            mday: '21',
            mday_padded: '21',
            yday: '354',
            isdst: '0',
            epoch: '1513915200',
            pretty: '11:00 PM EST on December 21, 2017',
            civil: '11:00 PM',
            month_name: 'December',
            month_name_abbrev: 'Dec',
            weekday_name: 'Thursday',
            weekday_name_night: 'Thursday Night',
            weekday_name_abbrev: 'Thu',
            weekday_name_unlang: 'Thursday',
            weekday_name_night_unlang: 'Thursday Night',
            ampm: 'PM',
            tz: '',
            age: '',
            UTCDATE: '',
        },
        temp: {
            english: '53',
            metric: '12'
        },
        dewpoint: {
            english: '46',
            metric: '8'
        },
        condition: 'Overcast',
        icon: 'cloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/nt_cloudy.gif',
        fctcode: '4',
        sky: '90',
        wspd: {
            english: '8',
            metric: '13'
        },
        wdir: {
            dir: 'S',
            degrees: '189'
        },
        wx: 'Cloudy',
        uvi: '0',
        humidity: '76',
        windchill: {
            english: '-9999',
            metric: '-9999'
        },
        heatindex: {
            english: '-9999',
            metric: '-9999'
        },
        feelslike: {
            english: '53',
            metric: '12'
        },
        qpf: {
            english: '0.0',
            metric: '0'
        },
        snow: {
            english: '0.0',
            metric: '0'
        },
        pop: '19',
        mslp: {
            english: '30.0',
            metric: '1016'
        },
    },
],
};

export default data;