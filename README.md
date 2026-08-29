<h1 align="center">HOMELABSOC</h1>

<p align="center">
  A distributed SOC homelab for learning network monitoring, endpoint visibility, SIEM correlation, threat intelligence, and response automation.
</p>

<p align="center">
  <a href="https://delriscotechnologies.github.io/homelabsoc/">Full Write-Up</a>
</p>

---

HomeLabSOC documents a distributed security operations lab spanning two locations. Twingate provides private, resource-level access between the locations without publishing the lab services directly to the internet.

## Architecture

| Component | Location | Purpose |
| --- | --- | --- |
| Suricata | A | Network telemetry and `eve.json` events |
| Velociraptor | A and B | Endpoint visibility and forensic collection |
| Wazuh | A | SIEM ingestion, decoding, and correlation |
| OpenCTI | A | Threat intelligence context |
| Shuffle | A | Alert-driven response workflows |
| Windows endpoints | B | Remote telemetry sources |

## Scope

This repository contains the project write-up and security guidance. It does not contain deployment automation, service configurations, credentials, captured evidence, or production-ready infrastructure.

> Build and operate this lab only on systems and networks you own or are explicitly authorized to test. Security telemetry can contain credentials, private addresses, host details, alerts, forensic artifacts, and other sensitive evidence; never commit real lab data to a public repository.

## References

- [Twingate documentation](https://www.twingate.com/docs)
- [Suricata documentation](https://docs.suricata.io/en/latest/)
- [Velociraptor documentation](https://docs.velociraptor.app/docs/)
- [Wazuh documentation](https://documentation.wazuh.com/current/)
- [OpenCTI repository](https://github.com/OpenCTI-Platform/opencti)
- [Shuffle repository](https://github.com/Shuffle/Shuffle)
