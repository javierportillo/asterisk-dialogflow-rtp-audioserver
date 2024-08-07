module.exports = {
    rtpServer: {
        port: 7777,
        host: '0.0.0.0',
        swap16: true
    },
    mqtt: {
        url: 'mqtt://mqtt',
        prefix: 'dialogflow-asterisk'
    },
    // used for playing back audio to asterisk
    asterisk: {
        format: 'slin16',
        // size of audio chunks being sent to Asterisk
        audioByteSize: 320,
        // increment in timestamp field between consecutive RTP packets
        packetTimestampIncrement: 160,
        // check https://en.wikipedia.org/wiki/RTP_payload_formats
        rtpPayloadType: 11
    },
  dialogflow: {
      apiEndpoint: 'us-east1-dialogflow.googleapis.com',
      auth: {
          apiEndpoint: 'us-east1-dialogflow.googleapis.com',
          keyFilename: `./config/nurul-beck-0306fc703782.json`,
      },
      agentId: '53072a3a-bece-424f-b2ca-9bd7ad06655f',
      project: 'nurul-beck',
      location: 'us-east1',
      initialEventName: 'WELCOME',
      enableOutputSpeech: true,
      audioInputConfig: {
          audioEncoding: 'AUDIO_ENCODING_LINEAR_16',
          sampleRateHertz: 16000,
          languageCode: 'en',
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
