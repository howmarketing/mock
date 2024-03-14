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

/**
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
 * The example marker was an real implemented example as following down to the next infer type
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
    new(): IGenericSingletonAttr<T>;
    _classInstanceSingleton: IGenericSingletonClass<
        IGenericSingletonReturnOverrideAttr<T>
    >;
    setUp?: () => any;
}

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

class OrderDataServiceClass {
    ORDER_DATA_API_URL: string =
        "https://my-json-server.typicode.com/howmarketing/mock/posts";

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

// Example usage:
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
