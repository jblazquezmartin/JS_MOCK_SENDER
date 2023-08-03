// Lista de JSON que serán enviados en bucle
const mockDataList = [
    { key1: "value1", key2: "value2" },
    {
        "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "call_sid": "CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "call_type": "carrier",
        "call_state": "ringing",
        "answered_by": "machine_start",
        "processing_state": "complete",
        "created_time": "2015-07-30T20:00:00Z",
        "start_time": "2015-07-30T20:00:00Z",
        "end_time": "2015-07-30T20:00:00Z",
        "duration": 100,
        "connect_duration": 99,
        "from": {},
        "to": {},
        "carrier_edge": {},
        "client_edge": {},
        "sdk_edge": {},
        "sip_edge": {},
        "tags": [
          "tags"
        ],
        "attributes": {},
        "properties": {},
        "trust": {},
        "annotation": {
          "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          "call_sid": "CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          "answered_by": "human",
          "connectivity_issue": "invalid_number",
          "quality_issues": [
            "low_volume"
          ],
          "spam": true,
          "call_score": 2,
          "comment": "this is a call",
          "incident": "https://twilio.zendesk.com/support/tickets/17353089"
        },
        "url": "https://insights.twilio.com/v1/Voice/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Summary"
      },
    { key3: "value3", key4: "value4" },
    {
        "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "call_sid": "CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "call_type": "carrier",
        "call_state": "ringing",
        "answered_by": "machine_start",
        "processing_state": "complete",
        "created_time": "2015-07-30T20:00:00Z",
        "start_time": "2015-07-30T20:00:00Z",
        "end_time": "2015-07-30T20:00:00Z",
        "duration": 100,
        "connect_duration": 99,
        "from": {},
        "to": {},
        "carrier_edge": {},
        "client_edge": {},
        "sdk_edge": {},
        "sip_edge": {},
        "tags": [
          "tags"
        ],
        "attributes": {},
        "properties": {},
        "trust": {},
        "annotation": {
          "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          "call_sid": "CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          "answered_by": "human",
          "connectivity_issue": "invalid_number",
          "quality_issues": [
            "low_volume"
          ],
          "spam": true,
          "call_score": 2,
          "comment": "this is a call",
          "incident": "https://twilio.zendesk.com/support/tickets/17353089"
        },
        "url": "https://insights.twilio.com/v1/Voice/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Summary"
      },
    // Agrega más objetos JSON si es necesario
  ];
  
  // Índice para seguir el progreso de envío en bucle
  let currentIndex = 0;
  
  // Función para enviar JSON en bucle
  function sendMockData() {
    if (currentIndex >= mockDataList.length) {
      // Si ya se enviaron todos los JSON, detener el intervalo
      clearInterval(intervalID);
      console.log("Envío completado.");
    } else {
      // Envío del JSON actual
      const currentData = mockDataList[currentIndex];
      console.log("Enviando JSON mock:", currentData);
  
      // Aquí puedes realizar cualquier lógica que desees antes de enviar el JSON.
      // Por ejemplo, puedes modificar el JSON antes de enviarlo.
  
      currentIndex++;
    }
  }
  
  // Intervalo de tiempo en milisegundos (ejemplo: cada 5 segundos)
  const intervalTime = 5000;
  
  // Iniciar el envío en intervalos regulares
  const intervalID = setInterval(sendMockData, intervalTime);
  
  // Para detener el envío en intervalos, utiliza clearInterval(intervalID);
  // clearInterval(intervalID);
  