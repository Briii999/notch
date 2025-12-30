interface DonationEvent {
  donationId: string;
  status: string;
  timestamp: string;
  amount: number;
}

interface DonationSummary {
  donationId: string;
  latestStatus: string;
  totalAmount: number;
  history: string[];
}

function summarizeDonations(events: DonationEvent[]): DonationSummary[] {
  // Urutkan event berdasarkan timestamp (ASC)
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const summaryMap: Map<string, DonationSummary> = new Map();

  // Proses event
  for (const event of sortedEvents) {
    if (!summaryMap.has(event.donationId)) {
      summaryMap.set(event.donationId, {
        donationId: event.donationId,
        latestStatus: event.status,
        totalAmount: 0,
        history: [],
      });
    }

    const summary = summaryMap.get(event.donationId)!;

    // Akumulasi amount
    summary.totalAmount += event.amount;

    // History (hindari status berulang berturut-turut)
    const lastStatus = summary.history[summary.history.length - 1];
    if (lastStatus !== event.status) {
      summary.history.push(event.status);
    }

    // Latest status selalu yang terbaru
    summary.latestStatus = event.status;
  }

  return Array.from(summaryMap.values());
}

const events: DonationEvent[] = [
  {
    donationId: "A001",
    status: "PENDING",
    timestamp: "2025-12-01T10:00:00Z",
    amount: 100,
  },
  {
    donationId: "A001",
    status: "PENDING",
    timestamp: "2025-12-01T10:05:00Z",
    amount: 50,
  },
  {
    donationId: "A001",
    status: "PAID",
    timestamp: "2025-12-01T11:00:00Z",
    amount: 150,
  },
  {
    donationId: "B002",
    status: "FAILED",
    timestamp: "2025-12-01T09:00:00Z",
    amount: 200,
  },
];

console.log(JSON.stringify(summarizeDonations(events), null, 2));
