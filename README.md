<h1 align="center">HOMELABSOC</h1>

<p align="center">
  A distributed SOC homelab for learning network monitoring, endpoint visibility, SIEM correlation, threat intelligence, and response automation.
</p>

<p align="center">
  <a href="https://delriscotechnologies.github.io/homelabsoc/">Full Write-Up</a>
</p>

---

HomeLabSOC documents a distributed security operations lab spanning two locations. Location A hosts the central monitoring and analysis services, Location B contains remote Windows endpoints, and Twingate provides private access between authorized resources without exposing the lab directly to the internet.

The lab combines Suricata for network telemetry, Velociraptor for endpoint visibility and forensic collection, Wazuh for SIEM correlation, OpenCTI for threat context, and Shuffle for response workflows. This repository contains the project write-up and security guidance; it does not contain deployment automation, service configurations, credentials, captured evidence, or production-ready infrastructure.

> Build and operate this lab only on systems and networks you own or are explicitly authorized to test. Security telemetry can contain credentials, private addresses, host details, alerts, forensic artifacts, and other sensitive evidence; never commit real lab data to a public repository.

## References

- [Twingate documentation](https://www.twingate.com/docs)
- [Suricata documentation](https://docs.suricata.io/en/latest/)
- [Velociraptor documentation](https://docs.velociraptor.app/docs/)
- [Wazuh documentation](https://documentation.wazuh.com/current/)
- [OpenCTI repository](https://github.com/OpenCTI-Platform/opencti)
- [Shuffle repository](https://github.com/Shuffle/Shuffle)
