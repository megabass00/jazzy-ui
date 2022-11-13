// eslint-disable-next-line
import { ArgTypes } from '@storybook/react';

import {
    Accesibility,
    Add,
    AddCircle,
    Airplane,
    Alarm,
    ArrowDropDown,
    ArrowDropLeft,
    ArrowDropRight,
    ArrowDropUp,
    ArrowUp,
    ArrowRight,
    ArrowDown,
    ArrowLeft,
    Attachment,
    Audio,
    Backspace,
    Battery,
    Bitcoin,
    Block,
    Bluetooth,
    Bookmark,
    Calendar,
    Camera,
    Cancel,
    Cast,
    ChatBubble,
    Check,
    CheckCircle,
    Clock,
    Cloud,
    Code,
    Construction,
    ContentCopy,
    Desktop,
    Dollar,
    DotsHorizontal,
    DotsVertical,
    Edit,
    Electric,
    Email,
    Emoji,
    Error,
    Euro,
    Facebook,
    Favourite,
    File,
    FileDownload,
    Filter,
    Flag,
    Folder,
    Headphones,
    Image,
    Input,
    Key,
    Lightbulb,
    Link,
    Login,
    Logout,
    Mail,
    Menu,
    Micro,
    Mobile,
    Notification,
    Palette,
    Pause,
    Phone,
    Plus,
    Play,
    Pound,
    Question,
    Replay,
    Reply,
    Search,
    Security,
    Settings,
    Star,
    Sync,
    User,
    Warning,
    Wifi,
    Yuan,
} from '../components/icons';
import { themeColors } from '../typings';

export const colorThemeOptions = [...themeColors];
export const alignOptions = ['start', 'center', 'end'];
export const textAlignOptions = ['left', 'center', 'right'];
export const directionOptions = ['row', 'column'];
export const icons = [
    Accesibility,
    Add,
    AddCircle,
    Airplane,
    Alarm,
    ArrowDropDown,
    ArrowDropLeft,
    ArrowDropRight,
    ArrowDropUp,
    ArrowUp,
    ArrowRight,
    ArrowDown,
    ArrowLeft,
    Attachment,
    Audio,
    Backspace,
    Battery,
    Bitcoin,
    Block,
    Bluetooth,
    Bookmark,
    Calendar,
    Camera,
    Cancel,
    Cast,
    ChatBubble,
    Check,
    CheckCircle,
    Clock,
    Cloud,
    Code,
    Construction,
    ContentCopy,
    Desktop,
    Dollar,
    DotsHorizontal,
    DotsVertical,
    Edit,
    Electric,
    Email,
    Emoji,
    Error,
    Euro,
    Facebook,
    Favourite,
    File,
    FileDownload,
    Filter,
    Flag,
    Folder,
    Headphones,
    Image,
    Input,
    Key,
    Lightbulb,
    Link,
    Login,
    Logout,
    Mail,
    Menu,
    Micro,
    Mobile,
    Notification,
    Palette,
    Pause,
    Phone,
    Plus,
    Play,
    Pound,
    Question,
    Replay,
    Reply,
    Search,
    Security,
    Settings,
    Star,
    Sync,
    User,
    Warning,
    Wifi,
    Yuan,
];

export const hideControls = (controls: Array<string>): ArgTypes =>
    Object.fromEntries(
        controls.map((controlToHide) => [
            controlToHide,
            {
                table: {
                    disable: true,
                },
            },
        ])
    );

type EnumControlType =
    | 'radio'
    | 'inline-radio'
    | 'check'
    | 'inline-check'
    | 'select'
    | 'multi-select';
export const enumControl = (
    prop: string,
    type: EnumControlType,
    options?: string[]
): Record<string, object> => ({
    [prop]: {
        options: options,
        control: { type },
    },
});

type NumberControlType = 'number' | 'range';
type NumberControlArg = 'min' | 'max' | 'step';
export const numberControl = (
    prop: string,
    type: NumberControlType,
    args: Record<NumberControlArg, number>
): Record<string, object> => ({
    [prop]: {
        control: { type, ...args },
    },
});

interface ColorControlOptions {
    presets?: string[];
    defaultValue?: string;
}
export const colorControl = (
    prop: string,
    { presets = colorThemeOptions, defaultValue }: ColorControlOptions = {}
): Record<string, object> => ({
    [prop]: {
        control: { type: 'color', presetColors: presets, defaultValue },
    },
});

export const defaultSpaceArgs = {
    ...numberControl('p', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('pt', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('pb', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('pl', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('pr', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('px', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('py', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('m', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('mt', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('mb', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('ml', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('mr', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('mx', 'number', { min: 1, max: 10, step: 1 }),
    ...numberControl('my', 'number', { min: 1, max: 10, step: 1 }),
};

export const defaultSpaceArgValues = {
    p: 1,
    pt: 0,
    pb: 0,
    pl: 0,
    pr: 0,
    px: 0,
    py: 0,
    m: 0,
    mt: 0,
    mb: 0,
    ml: 0,
    mr: 0,
    mx: 0,
    my: 0,
};
