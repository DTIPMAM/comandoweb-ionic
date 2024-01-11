/**
 * EXIF tag standard reference
 *
 * Tag Name: Orientation
 * Tag ID: 0x0112
 * Writable: int16u
 * Group: IFD0
 * Values:
 1 = Horizontal (normal)
 2 = Mirror horizontal
 3 = Rotate 180
 4 = Mirror vertical
 5 = Mirror horizontal and rotate 270 CW
 6 = Rotate 90 CW
 7 = Mirror horizontal and rotate 90 CW
 8 = Rotate 270 CW
 */
export declare enum DOC_ORIENTATION {
    Up = 1,
    Down = 3,
    Right = 6,
    Left = 8,
    UpMirrored = 2,
    DownMirrored = 4,
    LeftMirrored = 5,
    RightMirrored = 7,
    Default = 0,
    NotJpeg = -1,
    NotDefined = -2
}
