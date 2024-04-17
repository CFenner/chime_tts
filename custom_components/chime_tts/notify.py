"""Chime TTS Notify."""

import logging
from homeassistant.config_entries import ConfigEntry
from homeassistant.components.notify import BaseNotificationService

_LOGGER = logging.getLogger(__name__)

@staticmethod
async def async_get_service(hass, config, discovery_info=None):
    """Retrieve instance of ChimeTTSNotificationService class."""
    _config = config
    return ChimeTTSNotificationService(hass, config)

@staticmethod
async def get_service(hass):
    """Retrieve instance of ChimeTTSNotificationService class."""
    return ChimeTTSNotificationService(hass.data['chime_tts'])

class ChimeTTSNotificationService(BaseNotificationService):
    """Chime TTS Notify Service class."""

    _config: ConfigEntry

    def __init__(self, chime_tts_instance, config: ConfigEntry = {}):
        """Initialize the Chime TTS Notify Service."""
        self.chime_tts_instance = chime_tts_instance
        self._config = config

    async def async_send_message(self, message="", **kwargs):
        """Send a notification with the Chime TTS Notify Service."""
        kwargs["message"] = message
        data = kwargs.get("data", {})
        for key in ["entity_id",
                    "chime_path",
                    "end_chime_path",
                    "offset",
                    "final_delay",
                    "tts_platform",
                    "tts_speed",
                    "tts_pitch",
                    "volume_level",
                    "join_players",
                    "unjoin_players",
                    "cache",
                    "announce",
                    "fade_audio",
                    "language",
                    "tld",
                    "voice",
                    "options",
                    "audio_conversion"]:
            if key in self._config:
                kwargs[key] = self._config.get(key)
            # Override parameters from data dictionary
            if data and key in data:
                kwargs[key] = data[key]

        _LOGGER.debug("----- Chime TTS Notify -----")
        for key in kwargs:
            value = kwargs[key]
            quote = "'" if isinstance(value, str) else ""
            _LOGGER.debug(" - %s = %s%s%s", key, quote, str(value), quote)

        await self.hass.services.async_call("chime_tts", "say", kwargs, blocking=True)