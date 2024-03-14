# Mock DB Project

Welcome to the Mock DB project! This repository serves as a platform for simulating a database environment with mock data. Here's an overview of what you'll find:

## Project Structure

- **Project Structure Path (from `root/`):**
  - To extract it's structure path, run:

````ruby
bash extract_path_structure.sh
````

### OUTPUT

````ruby
|- ./
│ │- index.js
│ │- db.json
│ │- extract_path_structure.sh
│ │- Singleton/
│ |  │- index.sh
│ |  |- singleton.ts
│ |  |- 
---------
````

### PATH DETAILS: 

- **Root Path (`/`):**
  - Contains the `db.json` file, which serves as the data source for the mock endpoints.
  - The server reads this file directly from the GitHub repository on the root path to provide the API endpoints to request as it's respectively responses data.

- **Singleton Path (`/singleton`):**
  - Provides access to additional files related to the Singleton pattern.
  - **`singleton.ts`:** This file demonstrates how to utilize the API for requesting data and processing responses to generate chart data. It serves as a practical example of implementing the Singleton pattern within the context of API interactions.
  - **`index.sh`:** Execute this script using `bash index.sh` to automatically open the TypeScript code in a format ready to run on the TypeScript playground platform.

---

## Getting Start

To utilize this project effectively, follow these steps:

> **DISCLAIMER:** To get started with the Mock DB project, simply clone the repository and run the bash script file `index.sh` inside the `Singleton` path.
> 

### 1. Clone the repository to your local machine.

```ruby
git clone https://github.com/howmarketing/mock.git
````

### 2. Explore the `db.json` file for mock data or examine the `singleton.ts` and `index.sh` files for Singleton pattern implementation and TypeScript code execution

```ruby
cd mock && ls -lahGRt ./
````

### 3. Navigate to the path `/singleton` to access the project sample files

```ruby
cd ./mock/Singleton
````

### 4. Execute helper script

```ruby
bash ./index.sh
````

- > **NOTE:** The script will open the TypeScript code playground and the vscode project followed by the sample file `singleton.ts`
>

- 
    ````ruby
    open https://dye6.short.gy/QmtuEw && code . && code ./singleton.ts
    ````

## BEST REGARDS

1. Sincerely, I hope it to be useful on your developer journey!
2. Feel free to contribute, suggest improvements, or report issues.

**Happy coding!**

---

## Author

### GABRIEL ARIZA

- _Senior Software Engineer (14 years of experience)_
- **WhatsApp:** [+55 62 9 9277-6060](https://wa.api.com/5562992776060)
- **E-mail:** [myblenet@gmail.com](mailto:myblenet@gmail.com)

---

## CODE DEMO (snippet's)

### API MOCK JSON DATA

`./db.json`

````json

{
    "orders": [
        { "cleared": true, "orderDate": "2022-11-01T00:57:51.333Z",  "total":  100 },
        { "cleared": true, "orderDate": "2022-11-01T01:11:15.688Z",  "total":  40  },
        { "cleared": true, "orderDate": "2022-11-02T01:38:12.456Z",  "total":  20  },
        { "cleared": true, "orderDate": "2022-11-02T01:42:41.313Z",  "total":  115 },
        { "cleared": true, "orderDate": "2022-11-02T01:49:42.887Z",  "total":  95  },
        { "cleared": true, "orderDate": "2022-11-02T02:01:40.564Z",  "total":  40  },
        { "cleared": true, "orderDate": "2022-11-03T02:21:04.846Z",  "total":  85  },
        { "cleared": true, "orderDate": "2022-11-03T02:48:13.510Z",  "total":  50  },
        { "cleared": true, "orderDate": "2022-11-04T02:55:45.977Z",  "total":  47  },
        { "cleared": true, "orderDate": "2022-11-05T03:06:11.801Z",  "total":  80  },
        { "cleared": true, "orderDate": "2022-11-06T05:33:41.667Z",  "total":  32  },
        { "cleared": true, "orderDate": "2022-11-06T07:19:55.865Z",  "total":  95  },
        { "cleared": true, "orderDate": "2022-11-07T11:22:01.504Z",  "total":  125 },
        { "cleared": true, "orderDate": "2022-11-07T11:56:20.807Z",  "total":  100 },
        { "cleared": true, "orderDate": "2022-11-08T14:10:40.987Z",  "total":  132 },
        { "cleared": true, "orderDate": "2022-11-08T15:26:40.186Z",  "total":  90  },
        { "cleared": true, "orderDate": "2022-11-09T15:29:29.410Z",  "total":  60  },
        { "cleared": true, "orderDate": "2022-11-10T15:31:45.686Z",  "total":  50  },
        { "cleared": true, "orderDate": "2022-11-11T15:33:18.195Z",  "total":  40  },
        { "cleared": true, "orderDate": "2022-11-12T15:19:52.914Z",  "total":  80  },
        { "cleared": true, "orderDate": "2022-11-13T16:37:21.012Z",  "total":  30  },
        { "cleared": true, "orderDate": "2022-11-14T16:53:23.988Z",  "total":  50  },
        { "cleared": true, "orderDate": "2022-11-14T18:46:53.596Z",  "total":  80  },
        { "cleared": true, "orderDate": "2022-11-15T19:10:23.033Z",  "total":  120 },
        { "cleared": true, "orderDate": "2022-11-16T20:00:53.793Z",  "total":  75  },
        { "cleared": true, "orderDate": "2022-11-17T20:16:45.413Z",  "total":  56  }
    ],
    "profile": { "user": "howmarketing", "repo": "mock" }
}

````

### USAGE | EXAMPLE

`./Singleton/singleton.ts`

````ts

(async () => {
    try {
        const orderDataService = new OrderDataServiceClass();
        const orderData = await orderDataService.fetchOrderData();

        const chartDataProcessor =
            ChartDataProcessorClass.getInstance(orderData);

        const processedData = {
            chartDataTotalByBucket: chartDataProcessor.getChartDataTotalByBucket(),
            chartData: chartDataProcessor.getChartData(),
            orderData: chartDataProcessor.getOrderData(),
            chartDataHashMap: chartDataProcessor.getChartDataHashMap(),
        };
        console.log(processedData);
    } catch (error: any) {
        console.error("Error:", error.message);
        // Handle error gracefully, e.g., show an error message to the user
    }
})();

````

### ORDER DATA SERVICE CLASS | ORDERS ENDPOINT | API REQUEST

`./Singleton/singleton.ts`

````ts

class OrderDataServiceClass {
    ORDER_DATA_API_URL: string =
        "https://my-json-server.typicode.com/howmarketing/mock/orders";

    /**
     * Fetch order data from the API
     * @returns {Promise<Array<Order>>} Order data array
     */
    async fetchOrderData(): Promise<IOrders> {
        try {
            const response = await fetch(this.ORDER_DATA_API_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return await response.json();
        } catch (error: any) {
            console.error("Error fetching order data:", error.message);
            throw error; // Re-throwing the error for higher level handling
        }
    }
}

````

### DATA PROCESSOR | SINGLETON CLASS

`./Singleton/singleton.ts`

````ts

class ChartDataProcessorClass extends AGenericSingleton {
    orderData: IOrders = [];
    chartData: IChartData = [];
    chartDataHashMap: IChartDataHashMap = {};
    chartDataTotalByBucket: IChartData = [];

    protected static _classInstanceSingleton: any;

    declare static getInstance: <T = InstanceType<typeof ChartDataProcessorClass>>(orderData?: IOrders) => T
    static {
        this.getInstance = <T = InstanceType<typeof ChartDataProcessorClass>>(
            orderData?: IOrders
        ): T => {
            const $this = super.getInstance(...[orderData]) as T;
            return $this;
        };
    }

    protected setUp(orderData: IOrders) {
        this.setOrderData(orderData);
        this.reduceOrdersByCleared();
        this.sortOrdersByDateTimestamp();
        this.setChartData();
        this.setChartDataHashMap();
        this.setChartDataTotalByBucket();
    }

    getOrderData(): IOrders {
        return this.orderData;
    }

    getChartData(): IChartData {
        return this.chartData;
    }

    getChartDataHashMap(): IChartDataHashMap {
        return this.chartDataHashMap;
    }

    getChartDataTotalByBucket(): IChartData {
        return this.chartDataTotalByBucket;
    }

    setOrderData(orderData: IOrders): void {
        this.orderData = orderData;
    }

    setChartData(chartData?: IChartData): void {
        this.chartData = chartData || this._getChartDataFromOrderData();
    }

    setChartDataHashMap(chartDataHashMap?: IChartDataHashMap): void {
        this.chartDataHashMap =
            chartDataHashMap || this._getChartDataHashMapFromOrderData();
    }

    setChartDataTotalByBucket(chartDataTotalByBucket?: IChartData): void {
        this.chartDataTotalByBucket =
            chartDataTotalByBucket ||
            this._getChartDataTotalByBucketFromChartDataHashMap();
    }

    private reduceOrdersByCleared() {
        this.orderData = this.orderData.reduce<IOrders>((orders, order) => {
            order.orderDateTimestamp = new Date(order.orderDate).getTime();
            if (order.cleared) orders.push(order);
            return orders;
        }, []);
    }

    private sortOrdersByDateTimestamp() {
        this.orderData = this.orderData.sort(
            (a, b) => a.orderDateTimestamp - b.orderDateTimestamp
        );
    }

    private _getChartDataFromOrderData(
        orderData: IOrders = this.orderData
    ): IChartData {
        return orderData.map<IChartElement>(({ orderDate, total }) => ({
            time: orderDate,
            value: total,
        }));
    }

    private _getChartDataHashMapFromOrderData(
        orderData: IOrders = this.orderData
    ): IChartDataHashMap {
        return orderData.reduce<IChartDataHashMap>((hash, order) => {
            const bucket = order.orderDate.split("T").shift() as string;
            if (!hash[bucket]) {
                hash[bucket] = [];
            }
            hash[bucket].push({ time: order.orderDate, value: order.total });
            return hash;
        }, {});
    }

    private _getChartDataTotalByBucketFromChartDataHashMap(
        chartDataHashMap: IChartDataHashMap = this.chartDataHashMap
    ): IChartData {
        return Object.entries(chartDataHashMap).reduce<IChartData>(
            (chartData, [bucket, map]) => {
                const time = bucket; // DATE yyyy-mm-dd
                const value = map.reduce<number>(
                    (total, { value }) => total + value,
                    0
                );
                chartData.push({ time, value });
                return chartData;
            },
            []
        );
    }
}

````

### ABSTRACT CLASS | GENERIC SINGLETON

`./Singleton/singleton.ts`

````ts

/**
 *
 *
 * @export
 * @abstract
 * @class AGenericSingleton
 */
class AGenericSingleton {
    protected static _classInstanceSingleton: IGenericSingletonClass<AGenericSingleton>;

    /**
     * THIS IS THE PUBLIC ACCESSOR INITIALIZATION OF THE SINGLETON INSTANCE OF CLASS
     */
    public static getInstance<T>(...instanceArgs: any[]): T {
        return this.getInstanceSingleton<T>(
            this as unknown as IGenericSingletonReturnOverrideAttr<T>,
            instanceArgs
        );
    }

    /**
     * THIS IS THE SECOND LAYER AS A CHEAT TYPESCRIPT INTERPRETER MISSING UP SOME TYPE-CHECKS REFERENCE WHEN BUILD RUNTIME
     */
    protected static getInstanceSingleton<T>(
        $thisInferT: IGenericSingletonReturnOverrideAttr<T>,
        instanceArgs: any[]
    ): any {
        return this.singletonInstanceCreator(
            $thisInferT,
            this as unknown as IGenericSingletonClass<T>,
            instanceArgs
        );
    }

    /**
     * THIS IS THE THIRD LAYER THAT RECEIVE THESE CHEAT TYPE-CHECKS AND APPLY THE CREATION OF THE SINGLETON LOGIC
     */
    public static singletonInstanceCreator<T>(
        $thisInferT: IGenericSingletonReturnOverrideAttr<T>,
        $thisInferU: IGenericSingletonClass<T>,
        instanceArgs: any[]
    ): any {
        /** Check if instance already exist */
        if ($thisInferT._classInstanceSingleton) {
            // console.log('returned an existent _classInstanceSingleton');
            return $thisInferT._classInstanceSingleton;
        }

        /** Store the singleton instance in the static _classInstanceSingleton property */
        $thisInferT._classInstanceSingleton = new $thisInferU();
        if ("setUp" in $thisInferT._classInstanceSingleton) {
            if (typeof $thisInferT._classInstanceSingleton.setUp === "function") {
                $thisInferT._classInstanceSingleton.setUp(...instanceArgs);
            }
        }
        // console.log('returns the instantiated _classInstanceSingleton');
        return $thisInferT._classInstanceSingleton;
    }
}

````

### INTERFACES | GENERIC SINGLETON ABSTRACT CLASS INTERFACE

`./Singleton/singleton.ts`

````ts

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * CLASS INTERFACE ATTRIBUTES INFER IMPLEMENTS REQUIRES
 *  * @example
 * ```typescript
 *    //example of how to use this infer type
 * 		type IGenericSingletonReturnOverrideAttr<T> = T & IGenericSingletonAttr<IGenericSingletonAttr<T>>;
 * ```
 * @description
 * The example marker it is really implemented.
 * Follow down to watch the next's type's inferring
 */
interface IGenericSingletonAttr<T> {
  _classInstanceSingleton: T;
  setUp: (...args: any[]) => any;
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @name IGenericSingletonReturnOverrideAttr
 * @title
 *  * TYPE RETURN ACCESSOR INFER OWN INTERFACE
 * @example
 * ```typescript
 *    //example of how to use this infer type
 *
 * 		// THIS IS AN PUBLIC CLASS METHOD ACCESSOR INITIALIZATION OF THE SINGLETON INSTANCE OF CLASS
 *		public static getInstance<T>(): T {
 *			type IAttr = IGenericSingletonReturnOverrideAttr<T>;
 *			const $this: IAttr = this as unknown as IAttr;
 *			return this.getInstanceSingleton<T>($this);
 *		}
 * ```
 * @memberof AGenericSingleton
 */
type IGenericSingletonReturnOverrideAttr<T> = T &
  IGenericSingletonAttr<IGenericSingletonAttr<T>>;

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @name IGenericSingletonClass
 * @title
 *  * TYPE RETURN ACCESSOR INFER OWN INTERFACE
 * @example
 * ```typescript
 *    //example of how to use this infer type
 *		@inner
 * 		 // THIS IS AN PUBLIC CLASS METHOD ACCESSOR INITIALIZATION OF THE SINGLETON INSTANCE OF CLASS
 * 		@type { MainProviderConfigModel } }
 * 		@name _classInstanceSingleton Provider connection config property dependency implementation with default value }
 * 		@property {IGenericSingletonClass<IGenericSingletonReturnOverrideAttr<T>>} _classInstanceSingleton }
 * 		@memberof MainProviderConfigModel
 * 		protected static _classInstanceSingleton: IGenericSingletonClass<MainProviderConfigModel>;
 *
 * ```
 * @memberof AGenericSingleton // TODO Reference for "AGenericSingleton" will be placed as Abstract has been implemented
 */
interface IGenericSingletonClass<T> extends AGenericSingleton {
  new (): IGenericSingletonAttr<T>;
  _classInstanceSingleton: IGenericSingletonClass<
    IGenericSingletonReturnOverrideAttr<T>
  >;
  setUp?: () => any;
}

````

### OTHER'S | TYPES / INTERFACES

`./Singleton/singleton.ts`

````ts

interface UserTicketProps {
  ticketName: string;
  guest?: boolean;
  price: number;
  description: string;
  barCode: string;
  fee: number;
  orderId: string;
  eventId: string;
  checkedIn: boolean;
  checkInDate: Date;
}

interface EventCartProps {
  price: number;
  quantity?: number;
  fee?: number;
  _id?: string;
  ticketName: string;
}

type IChartElement = {
  time: any;
  value: number;
};

type IChartData = Array<IChartElement>;

type IChartProps = {
  data: IChartData;
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
  };
};

interface OrderProps {
  ticketName?: string;
  price?: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  zipCode?: string;
  eventId: string;
  orderDate: Date;
  total: number;
  cart: {
    [tixId: string]: EventCartProps;
  };
  checkedIn: boolean;
  tickets: UserTicketProps[];
  cancelled: boolean;
  guest: boolean;
  currency: string;
  refunded: boolean;
  cleared: boolean; // TODO: Make sure to filter as true for the total sales widget chart
  refundAmount?: number;
  extraFields?: { [field: string]: string }[];
  stripeFee: number;
  applePay?: boolean;
  status:
    | "pending"
    | "rejected"
    | "expired"
    | "copped"
    | "refunded"
    | "cancelled"
    | "swap-tixs"
    | "checked-in";
  offerCode: string;
  offerBased: boolean;
  updatedAt: Date;
  _id: string;
  reminderExpiredJobId?: string;
  utms?: {
    utm_source: string;
    utm_medium: string;
  };
}

type IOrder = Omit<OrderProps, "orderDate"> & {
  orderDate: string;
  orderDateTimestamp: number;
};

type IOrders = Array<IOrder>;

interface IChartDataHashMap {
  [bucket: string]: IChartData;
}

````
