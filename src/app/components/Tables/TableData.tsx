import { BillingType, GeneralStatus, SubscriptionType } from "../../enum";

/** @format */

// Orders
export const OrderData = [
  {
    id: 1,
    date: "Nov 1, 2022",
    count: "09",
    item: "Microsoft Intune",
    price: "$11.22",
    coTerm: "Nov 1, 2023",
    status: GeneralStatus.Active,
    lineItem: [
      {
        id: 1,
        sku: "1",
        quantity: "24",
        item: "Microsoft 365 E3",
        unitPrice: "1000",
        term: "P1YM",
      },
      {
        id: 2,
        sku: "2",
        quantity: "24",
        item: "Microsoft 365 E2",
        unitPrice: "3000",
        term: "P1YM",
      },
      {
        id: 3,
        sku: "3",
        quantity: "24",
        item: "Microsoft 365 E4",
        unitPrice: "2000",
        term: "P1YM",
      },
      {
        id: 4,
        sku: "4",
        quantity: "24",
        item: "Microsoft 365 E5",
        unitPrice: "5000",
        term: "P1YM",
      }
    ],
    billingPlan: BillingType.Monthly,
    termDuration: "1 Year",
    monthlyPayment: "13,500.00",
    orderTotal: "162,000,00",
    action: "View Details",
  },

  {
    id: 2,
    date: "Nov 1, 2022",
    count: "10",
    item: "Microsoft Intune",
    price: "$11.22",
    coTerm: "Nov 1, 2023",
    status: GeneralStatus.Deactive,
    lineItem: [
      
      {
        id: 5,
        sku: "5",
        quantity: "24",
        item: "Microsoft 365 E3",
        unitPrice: "1000",
        term: "P1YM",
      },
      {
        id: 6,
        sku: "6",
        quantity: "24",
        item: "Microsoft 365 E2",
        unitPrice: "3000",
        term: "P1YM",
      },
      {
        id: 7,
        sku: "7",
        quantity: "24",
        item: "Microsoft 365 E4",
        unitPrice: "2000",
        term: "P1YM",
      },
      {
        id: 8,
        sku: "8",
        quantity: "24",
        item: "Microsoft 365 E5",
        unitPrice: "5000",
        term: "P1YM",
      }
    ],
    billingPlan: BillingType.Monthly,
    termDuration: "1 Year",
    monthlyPayment: "13,500.00",
    orderTotal: "162,000,00",
    action: "View Details",
  },

  {
    id: 3,
    date: "Dec 1, 2022",
    count: "11",
    item: "Microsoft Intune",
    price: "$11.22",
    coTerm: "Nov 1, 2023",
    status: GeneralStatus.Active,
    lineItem: [
      
      {
        id: 9,
        sku: "9",
        quantity: "24",
        item: "Microsoft 365 E3",
        unitPrice: "1000",
        term: "P1YM",
      },
      {
        id: 10,
        sku: "10",
        quantity: "24",
        item: "Microsoft 365 E2",
        unitPrice: "3000",
        term: "P1YM",
      },
      {
        id: 11,
        sku: "11",
        quantity: "24",
        item: "Microsoft 365 E4",
        unitPrice: "2000",
        term: "P1YM",
      },
      {
        id: 12,
        sku: "12",
        quantity: "24",
        item: "Microsoft 365 E5",
        unitPrice: "5000",
        term: "P1YM1",
      }
    ],
    billingPlan: BillingType.Monthly,
    termDuration: "1 Year",
    monthlyPayment: "13,500.00",
    orderTotal: "162,000,00",
    action: "View Details",
  },
  {
    id: 4,
    date: "Jan 1, 203",
    count: "12",
    item: "Microsoft Intune",
    price: "$11.22",
    coTerm: "Nov 1, 2023",
    status:  GeneralStatus.Deactive,
    lineItem: [
      {
        id: 13,
        sku: "13",
        quantity: "24",
        item: "Microsoft 365 E3",
        unitPrice: "1000",
        term: "P1YM",
      },
      {
        id: 14,
        sku: "14",
        quantity: "24",
        item: "Microsoft 365 E2",
        unitPrice: "3000",
        term: "P1YM",
      },
      {
        id: 15,
        sku: "15",
        quantity: "24",
        item: "Microsoft 365 E4",
        unitPrice: "2000",
        term: "P1YM",
      },
      {
        id: 16,
        sku: "16",
        quantity: "24",
        item: "Microsoft 365 E5",
        unitPrice: "5000",
        term: "P1YM",
      }
    ],
    billingPlan: BillingType.Anually,
    termDuration: "1 Year",
    monthlyPayment: "13,500.00",
    orderTotal: "162,000,00",
    action: "View Details",
  },
  {
    id: 5,
    date: "Feb 1, 2023",
    count: "13",
    item: "Microsoft Intune",
    price: "$11.22",
    coTerm: "Nov 1, 2023",
    status: GeneralStatus.Active,
    lineItem: [
      {
        id: 17,
        sku: "17",
        quantity: "24",
        item: "Microsoft 365 E3",
        unitPrice: "1000",
        term: "P1YM",
      },
      {
        id: 18,
        sku: "18",
        quantity: "24",
        item: "Microsoft 365 E2",
        unitPrice: "3000",
        term: "P1YM",
      },
      {
        id: 19,
        sku: "19",
        quantity: "24",
        item: "Microsoft 365 E4",
        unitPrice: "2000",
        term: "P1YM",
      },
      {
        id: 20,
        sku: "20",
        quantity: "24",
        item: "Microsoft 365 E5",
        unitPrice: "5000",
        term: "P1YM",
      }
    ],
    billingPlan: BillingType.Anually,
    termDuration: "1 Year",
    monthlyPayment: "13,500.00",
    orderTotal: "162,000,00",
    action: "View Details",
  },
];
export const OrderHeadCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    id: "count",
    numeric: true,
    disablePadding: true,
    label: "Count",
  },
  {
    id: "item",
    numeric: false,
    disablePadding: true,
    label: "Item",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: true,
    label: "Price",
  },
  {
    id: "coTerm",
    numeric: false,
    disablePadding: true,
    label: "Co Term",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: true,
    label: "Action",
  },
];

//Subscription
export const SubscriptionData = [
  {
    id: 1,
    subscription: "Microsoft v0",
    count: "06",
    renewsOn: "Nov 1, 2023",
    terms: "P1M",
    autoRenewel: "Yes",
    status: GeneralStatus.Active,
    type: SubscriptionType.Full,
    description: "Microsoft 365 E3 combines best-in-class productivity apps with core security and compliance capabilities.",
    subscriptionPeriod: 'Dec 2, 2026 - Dec 2, 2027', 
    descriptionList: `<ul>
            <li>
              Improve productivity and foster a culture of collaboration with
              connected experiences.
            </li>
            <li>
              Transform how you manage your business and enhance customer
              relationships with integrated workflows.
            </li>
            <li>
              Proactively protect your employees, data, and customer information
              with intelligent security.
            </li>
          </ul>`,
    action: "View Details",
  },
  {
    id: 2,
    subscription: "Microsoft v1",
    count: "12",
    renewsOn: "Dec 2, 2026",
    terms: "P1M",
    autoRenewel: "No",
    status: GeneralStatus.Active,
    type: SubscriptionType.Yearly,
    description: "Microsoft 365 E3 combines best-in-class productivity apps with core security and compliance capabilities.",
    subscriptionPeriod: 'Dec 2, 2026 - Dec 2, 2027', 
    descriptionList: `<ul>
            <li>
              Improve productivity and foster a culture of collaboration with
              connected experiences.
            </li>
            <li>
              Transform how you manage your business and enhance customer
              relationships with integrated workflows.
            </li>
            <li>
              Proactively protect your employees, data, and customer information
              with intelligent security.
            </li>
          </ul>`,
    action: "View Details",
  },
  {
    id: 3,
    subscription: "Microsoft v2",
    count: "06",
    renewsOn: "Nov 1, 2023",
    terms: "P1M",
    autoRenewel: "Yes",
    status: GeneralStatus.Active,
    type: SubscriptionType.Monthly,
    description: "Microsoft 365 E3 combines best-in-class productivity apps with core security and compliance capabilities.",
    subscriptionPeriod: 'Dec 2, 2026 - Dec 2, 2027',
    descriptionList: `<ul>
            <li>
              Improve productivity and foster a culture of collaboration with
              connected experiences.
            </li>
            <li>
              Transform how you manage your business and enhance customer
              relationships with integrated workflows.
            </li>
            <li>
              Proactively protect your employees, data, and customer information
              with intelligent security.
            </li>
          </ul>`,
    action: "View Details",
  },
  {
    id: 4,
    subscription: "Microsoft v3",
    count: "06",
    renewsOn: "Nov 1, 2023",
    terms: "P1M",
    autoRenewel: "Yes",
    status: GeneralStatus.Deactive,
    type: SubscriptionType.Yearly,
    description: "Microsoft 365 E3 combines best-in-class productivity apps with core security and compliance capabilities.",
    subscriptionPeriod: 'Dec 2, 2026 - Dec 2, 2027',
    descriptionList: `<ul>
            <li>
              Improve productivity and foster a culture of collaboration with
              connected experiences.
            </li>
            <li>
              Transform how you manage your business and enhance customer
              relationships with integrated workflows.
            </li>
            <li>
              Proactively protect your employees, data, and customer information
              with intelligent security.
            </li>
          </ul>`,
    action: "View Details",
  },
  {
    id: 5,
    subscription: "Microsoft v4",
    count: "06",
    renewsOn: "Nov 1, 2023",
    terms: "P1M",
    autoRenewel: "Yes",
    status: GeneralStatus.Deactive,
    type: SubscriptionType.Full,
    description: "Microsoft 365 E3 combines best-in-class productivity apps with core security and compliance capabilities.",
    subscriptionPeriod: 'Dec 2, 2026 - Dec 2, 2027',
    descriptionList: `<ul>
            <li>
              Improve productivity and foster a culture of collaboration with
              connected experiences.
            </li>
            <li>
              Transform how you manage your business and enhance customer
              relationships with integrated workflows.
            </li>
            <li>
              Proactively protect your employees, data, and customer information
              with intelligent security.
            </li>
          </ul>`,
    action: "View Details",
  },
];
export const SubscriptionHeadCells = [
  {
    id: "subscription",
    numeric: false,
    disablePadding: true,
    label: "Subscription",
  },
  {
    id: "count",
    numeric: true,
    disablePadding: true,
    label: "Count",
  },
  {
    id: "renewsOn",
    numeric: false,
    disablePadding: true,
    label: "Renews On",
  },
  {
    id: "terms",
    numeric: false,
    disablePadding: true,
    label: "Terms",
  },
  {
    id: "autoRenewel",
    numeric: false,
    disablePadding: true,
    label: "Auto Renewel",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: true,
    label: "Action",
  },
];

// Organization
export const OrganizationData = [
  {
    id: 1,
    organization: "Costco",
    status: GeneralStatus.Active,
    created: "06/02/2012",
    organization_tenant_id: "{CBF2A708-6FBC-4F1C-A084-47389A4BBD3E",
    notes: "",
  },
  {
    id: 2,
    organization: "McDonalds",
    status: GeneralStatus.Suspended,
    created: "03/03/2003",
    organization_tenant_id: "{B1E3C250-FC51-4030-9489-E747DA4486F0}",
    notes: "Organization suspended for non-payment.",
  },
  {
    id: 3,
    organization: "KFC",
    status: GeneralStatus.Active,
    created: "13/13/2023",
    organization_tenant_id: "{B1E3C250-FC51-4030-9489-E747DA4486F0}",
    notes: "Organization suspended for non-payment.",
  },
];

// OrganizationDiscount
export const OrganizationDiscountData = [
  {
    id:1,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id:2,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id:3,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id:4,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id:5,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
  {
    id:6,
    title: "Microsoft 365 E1",
    discount: "00.50%",
    sku: "{4BE824DA-2F45-45D0-...",
    description: "Microsoft 365 E1 is an award winning product for all...",
  },
];
