<h1 align="center">HOMELABSOC</h1>

<p align="center">
  A distributed SOC homelab for learning network monitoring, endpoint visibility, SIEM correlation, threat intelligence, and response automation.
</p>

<p align="center">
  <a href="#how-it-works">Architecture</a> |
  <a href="#scope-and-safeguards">Safeguards</a> |
  <a href="./index.html">Full Write-Up</a>
</p>

---

HomeLabSOC documents a distributed security operations lab spanning two locations. Location A hosts the central monitoring and analysis services, Location B contains remote Windows endpoints, and Twingate provides private access between authorized resources without exposing the lab directly to the internet.

The lab combines Suricata for network telemetry, Velociraptor for endpoint visibility and forensic collection, Wazuh for SIEM correlation, OpenCTI for threat context, and Shuffle for response workflows. This repository contains the project write-up and security guidance; it does not contain deployment automation, service configurations, credentials, captured evidence, or production-ready infrastructure.

> Build and operate this lab only on systems and networks you own or are explicitly authorized to test. Security telemetry can contain credentials, private addresses, host details, alerts, forensic artifacts, and other sensitive evidence; never commit real lab data to a public repository.

## How It Works

```text
Location B
  Windows endpoints
  Velociraptor agents
          |
          | private access through Twingate
          v
Location A
  Mirrored traffic --> Suricata --> eve.json --------+
  Endpoint agents --> Velociraptor --> artifacts -----+--> Wazuh SIEM --> alerts --> Shuffle

  OpenCTI --> indicators and MITRE ATT&CK context --> analyst enrichment
```

Twingate establishes the private communication layer before monitoring services are introduced. Suricata observes mirrored network traffic and writes structured events to `eve.json`, while Velociraptor collects endpoint artifacts from authorized clients. Wazuh ingests the available telemetry through direct file access, correlates activity, and generates alerts. OpenCTI adds indicator and ATT&CK context, and Shuffle turns selected alerts into auditable enrichment, notification, or containment workflows.

## Lab Phases

1. **Network visibility** - establish a traffic baseline with Suricata and `eve.json`.
2. **Endpoint visibility** - collect forensic artifacts and support threat hunting with Velociraptor.
3. **SIEM correlation** - centralize telemetry and tune Wazuh decoders and rules.
4. **Threat intelligence** - connect indicators and TTPs to MITRE ATT&CK context with OpenCTI.
5. **Unified ingestion** - normalize network and endpoint data without adding an unnecessary shipping layer.
6. **Response automation** - use Shuffle workflows for enrichment, notifications, and controlled response actions.

## Scope and Safeguards

- Separate management, telemetry, endpoint, and attacker-lab traffic into distinct trust zones.
- Grant Twingate access per resource and user instead of exposing entire private subnets.
- Validate TLS certificates for agent-to-server and service-to-service connections.
- Keep API keys, service credentials, tokens, and private endpoints out of images, Compose files, screenshots, and Git.
- Restrict administrative interfaces to the management zone and require strong authentication.
- Sanitize logs, alerts, endpoint artifacts, hostnames, addresses, and screenshots before publishing documentation.
- Pin container images and automation dependencies deliberately, then review updates before deployment.
- Monitor memory, storage, log growth, and I/O pressure; Wazuh, OpenCTI, Velociraptor, Suricata, and Shuffle can exceed the capacity of a single small host.
- Treat automated containment as a controlled lab capability and require human approval for disruptive actions.
- The HTML page is documentation only; it does not deploy or configure the SOC automatically.

## Repository Contents

- [`index.html`](./index.html) - full project narrative, architecture phases, controls, and lessons learned.
- [`SECURITY.md`](./SECURITY.md) - guidance for reporting security concerns without exposing sensitive details.
- [`.github/workflows/html.yml`](./.github/workflows/html.yml) - validates `index.html` on pushes and pull requests.
- [`.github/dependabot.yml`](./.github/dependabot.yml) - checks GitHub Actions dependencies for weekly updates.

## References

- [Twingate documentation](https://www.twingate.com/docs)
- [Suricata documentation](https://docs.suricata.io/en/latest/)
- [Velociraptor documentation](https://docs.velociraptor.app/docs/)
- [Wazuh documentation](https://documentation.wazuh.com/current/)
- [OpenCTI repository](https://github.com/OpenCTI-Platform/opencti)
- [Shuffle repository](https://github.com/Shuffle/Shuffle)
- [MITRE ATT&CK](https://attack.mitre.org/)
