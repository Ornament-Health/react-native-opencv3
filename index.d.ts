/**
 * [See docs](https://github.com/dmydry/react-native-opencv3
 *
 * [Repo](https://github.com/dmydry/react-native-opencv3)
 */

interface MatRef {
  cols: number;
  rows: number;
  matIndex: number;
  CvType?: typeof CvType;
}

interface ImageMap {
  width: number;
  height: number;
  uri: string;
}

export abstract class RNCv {
  public static imageToMat(inPath: string): Promise<MatRef>;

  /**
   * Android only!
   * @param inPath 
   */
  public static imageReadToMat(inPath: string): Promise<MatRef>;

  public static matToImage(srcMat: MatRef, outPath: string): Promise<ImageMap>;

  /**
   * Android only!
   * @param srcMat 
   * @param outPath 
   */
  public static matWriteToImage(
    srcMat: MatRef,
    outPath: string
  ): Promise<ImageMap>;

  public static deleteMat(srcMat: MatRef): void;

  public static invokeMethod(method: string, params: {}): void;

  public static invokeInOutMethod(
    input: string,
    method: string,
    params: {},
    output: string
  ): void;

  public static invokeMethodWithCallback(
    input: string,
    method: string,
    params: {},
    output: string,
    callback: string
  ): void;

  public static drawLine(
    inMat: MatRef,
    pt1: CvPoint,
    pt2: CvPoint,
    scalarVal: CvScalar,
    thickness: number,
    lineType: number,
  ): void;

  public static cvtColor(
    sourceMat: MatRef,
    destMat: MatRef,
    convColorCode: typeof ColorConv
  ): void;
}

export class CvPoint {
  constructor(xval: number, yval: number);
  set(vals: number[]): void;
  dot(otherPt: CvPoint): number;
}

export class CvScalar {
  constructor(v0val?: number, v1val?: number, v2val?: number, v3val?: number);
  static all(allval: number): CvScalar;
  set(vals: number[]): void;
}

export class CvSize {
  constructor(width?: number, height?: number);
}

export class CvRect {
  constructor(top?: number, left?: number, width?: number, height?: number);
  static all(allval: number): CvScalar;
  set(vals: number[]): void;
}

export const Core: {
  [key: string]: number;
};

export const Imgproc: {
  [key: string]: number;
};

export const ColorConv: {
  [key: string]: number | string;
};

export const CvType: {
  [key: string]: number;
};

export class Mat {
  constructor(
    numRows: number,
    numCols: number,
    cvtype: typeof CvType,
    scalarval?: CvScalar
  );
  init(): Promise<MatRef>;
  setTo(color: CvScalar): void;
  t(): void;
  crop(x: int, y: int, width: int, heigth: int): void;
}

export class MatOfInt {
  constructor(lowintvalue: number, highintvalue: number);
  init(): Promise<MatRef>;
}

export class MatOfFloat {
  constructor(lowfloatvalue: number, highfloatvalue: number);
  init(): Promise<MatRef>;
}

export class CvImage extends React.Component<{ cvinvoke?: {} }> {}

export class CvCamera extends React.Component<{
  useStorage?: boolean;
  cvinvoke?: {};
  facing?: string;
}> {}
