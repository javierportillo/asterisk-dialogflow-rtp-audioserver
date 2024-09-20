module.exports = {
  rtpServer: {
    port: 7777,
    host: '0.0.0.0',
    swap16: true,
  },
  mqtt: {
    url: 'mqtt://mqtt',
    prefix: 'dialogflow-asterisk',
  },
  // used for playing back audio to asterisk
  asterisk: {
    format: 'slin16',
    // size of audio chunks being sent to Asterisk
    audioByteSize: 320,
    // increment in timestamp field between consecutive RTP packets
    packetTimestampIncrement: 160,
    // check https://en.wikipedia.org/wiki/RTP_payload_formats
    rtpPayloadType: 11,
  },
  dialogflow: {
    apiEndpoint: 'us-east1-dialogflow.googleapis.com',
    auth: {
      apiEndpoint: 'us-east1-dialogflow.googleapis.com',
      keyFilename: `./config/nurul-beck-50fa4e46cf5e-con-todo.json`,
    },
    // projects/nurul-beck/locations/us-east1/agents/1b283c12-0271-4d0e-9dde-e0120f78df27
    agentId: '1b283c12-0271-4d0e-9dde-e0120f78df27',
    project: 'nurul-beck',
    location: 'us-east1',
    initialEventName: 'WELCOME',
    enableOutputSpeech: true,
    audioInputConfig: {
      audioEncoding: 'AUDIO_ENCODING_LINEAR_16',
      sampleRateHertz: 16000,
      languageCode: 'es',
      singleUtterance: false,
      model: 'command_and_search',
      modelVariant: 'USE_BEST_AVAILABLE',
    },
    audioOutputConfig: {
      audioEncoding: 'OUTPUT_AUDIO_ENCODING_LINEAR_16',
      sampleRateHertz: 8000, // should be the same as dialogFlowAudioInputConfig.sampleRateHertz but Asterisk doesnt like 16000 back
      synthesizeSpeechConfig: {
        voice: {
          name: 'es-US-Standard-B',
        },
      },
    },
  },
}
