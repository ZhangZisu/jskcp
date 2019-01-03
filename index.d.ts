export = jskcp;
export as namespace jskcp;

declare namespace jskcp {
    const path: string;
    type KCPOutputCallback = (data: Buffer, size: number, context?: any) => any;
    class KCP {
        constructor(wtf: number, context: any);
        check(current: number): number;
        context(): any;
        flush(): void;
        input(data: string | Buffer): number;
        nodelay(nodelay?: number, interval?: number, resend?: number, nc?: number): number;
        output(cb: KCPOutputCallback): void;
        peeksize(): number;
        recv(): Buffer;
        release(): void;
        send(data: string | Buffer): number;
        setmtu(mtu?: number): number;
        update(current: number): void;
        waitsnd(): number;
        wndsize(sndwnd?: number, rcvwnd?: number): number;
    }
}