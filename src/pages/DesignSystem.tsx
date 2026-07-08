import { useState } from 'react';
import { Avatar } from '../components/atoms/avatar';
import { Badge } from '../components/atoms/badge';
import { Button } from '../components/atoms/button';
import { Checkbox } from '../components/atoms/checkbox';
import { Divider } from '../components/atoms/divider';
import { Input } from '../components/atoms/input';
import { Radio } from '../components/atoms/radio';
import { Select } from '../components/atoms/select';
import { Spinner } from '../components/atoms/spinner';
import { Toggle } from '../components/atoms/toggle';
import { Heading, Text } from '../components/atoms/typography';
import { Row, Section } from '../components/foundations';

const swatches = [
    {
        label: 'Primary',
        shades: [
            { token: 'primary-50', bg: 'bg-primary-50', text: 'text-primary-900' },
            { token: 'primary-100', bg: 'bg-primary-100', text: 'text-primary-900' },
            { token: 'primary-200', bg: 'bg-primary-200', text: 'text-primary-900' },
            { token: 'primary-300', bg: 'bg-primary-300', text: 'text-primary-900' },
            { token: 'primary-400', bg: 'bg-primary-400', text: 'text-white' },
            { token: 'primary-500', bg: 'bg-primary-500', text: 'text-white' },
            { token: 'primary-600', bg: 'bg-primary-600', text: 'text-white' },
            { token: 'primary-700', bg: 'bg-primary-700', text: 'text-white' },
            { token: 'primary-800', bg: 'bg-primary-800', text: 'text-white' },
            { token: 'primary-900', bg: 'bg-primary-900', text: 'text-white' },
        ],
    },
    {
        label: 'Neutral',
        shades: [
            { token: 'neutral-50', bg: 'bg-neutral-50', text: 'text-neutral-900' },
            { token: 'neutral-100', bg: 'bg-neutral-100', text: 'text-neutral-900' },
            { token: 'neutral-200', bg: 'bg-neutral-200', text: 'text-neutral-900' },
            { token: 'neutral-300', bg: 'bg-neutral-300', text: 'text-neutral-900' },
            { token: 'neutral-400', bg: 'bg-neutral-400', text: 'text-white' },
            { token: 'neutral-500', bg: 'bg-neutral-500', text: 'text-white' },
            { token: 'neutral-600', bg: 'bg-neutral-600', text: 'text-white' },
            { token: 'neutral-700', bg: 'bg-neutral-700', text: 'text-white' },
            { token: 'neutral-800', bg: 'bg-neutral-800', text: 'text-white' },
            { token: 'neutral-900', bg: 'bg-neutral-900', text: 'text-white' },
        ],
    },
    {
        label: 'Success',
        shades: [
            { token: 'success-50', bg: 'bg-success-50', text: 'text-success-900' },
            { token: 'success-100', bg: 'bg-success-100', text: 'text-success-900' },
            { token: 'success-300', bg: 'bg-success-300', text: 'text-success-900' },
            { token: 'success-500', bg: 'bg-success-500', text: 'text-white' },
            { token: 'success-600', bg: 'bg-success-600', text: 'text-white' },
            { token: 'success-800', bg: 'bg-success-800', text: 'text-white' },
        ],
    },
    {
        label: 'Warning',
        shades: [
            { token: 'warning-50', bg: 'bg-warning-50', text: 'text-warning-900' },
            { token: 'warning-100', bg: 'bg-warning-100', text: 'text-warning-900' },
            { token: 'warning-300', bg: 'bg-warning-300', text: 'text-warning-900' },
            { token: 'warning-500', bg: 'bg-warning-500', text: 'text-white' },
            { token: 'warning-600', bg: 'bg-warning-600', text: 'text-white' },
            { token: 'warning-800', bg: 'bg-warning-800', text: 'text-white' },
        ],
    },
    {
        label: 'Danger',
        shades: [
            { token: 'danger-50', bg: 'bg-danger-50', text: 'text-danger-900' },
            { token: 'danger-100', bg: 'bg-danger-100', text: 'text-danger-900' },
            { token: 'danger-300', bg: 'bg-danger-300', text: 'text-danger-900' },
            { token: 'danger-500', bg: 'bg-danger-500', text: 'text-white' },
            { token: 'danger-600', bg: 'bg-danger-600', text: 'text-white' },
            { token: 'danger-800', bg: 'bg-danger-800', text: 'text-white' },
        ],
    },
    {
        label: 'Info',
        shades: [
            { token: 'info-50', bg: 'bg-info-50', text: 'text-info-900' },
            { token: 'info-100', bg: 'bg-info-100', text: 'text-info-900' },
            { token: 'info-300', bg: 'bg-info-300', text: 'text-info-900' },
            { token: 'info-500', bg: 'bg-info-500', text: 'text-white' },
            { token: 'info-600', bg: 'bg-info-600', text: 'text-white' },
            { token: 'info-800', bg: 'bg-info-800', text: 'text-white' },
        ],
    },
];

export const DesignSystem = () => {
    const [checked, setChecked] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [radio, setRadio] = useState('a');

    return (
        <main className="p-8 max-w-5xl mx-auto space-y-16">
            <Heading as="h1">Design System</Heading>

            {/* Color Tokens */}
            <Section title="Color Tokens">
                <div className="space-y-3">
                    {swatches.map(({ label, shades }) => (
                        <div key={label} className="flex items-center gap-2">
                            <Text size="xs" muted className="w-14 shrink-0">
                                {label}
                            </Text>
                            <div className="flex gap-1">
                                {shades.map(({ token, bg }) => (
                                    <div key={token} className="flex flex-col items-center gap-1">
                                        <div
                                            className={`w-10 h-8 rounded border border-neutral-200 ${bg}`}
                                        />
                                        <Text size="xs" muted className="text-center leading-tight">
                                            {token.split('-')[1]}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Typography */}
            <Section title="Typography">
                <Row label="Headings">
                    <div className="space-y-2 w-full">
                        <Heading as="h1">Heading 1</Heading>
                        <Heading as="h2">Heading 2</Heading>
                        <Heading as="h3">Heading 3</Heading>
                        <Heading as="h4">Heading 4</Heading>
                        <Heading as="h5">Heading 5</Heading>
                        <Heading as="h6">Heading 6</Heading>
                    </div>
                </Row>
                <Row label="Text variants">
                    <Text variant="body">Body text</Text>
                    <Text variant="caption">Caption text</Text>
                    <Text variant="label">Label text</Text>
                    <Text as="code" variant="code">
                        code snippet
                    </Text>
                    <Text muted>Muted text</Text>
                </Row>
            </Section>

            {/* Button */}
            <Section title="Button">
                <Row label="Variants">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                </Row>
                <Row label="Sizes">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </Row>
                <Row label="Disabled">
                    <Button variant="primary" disabled>
                        Primary
                    </Button>
                    <Button variant="secondary" disabled>
                        Secondary
                    </Button>
                    <Button variant="ghost" disabled>
                        Ghost
                    </Button>
                </Row>
            </Section>

            {/* Badge */}
            <Section title="Badge">
                <Row label="Variants">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="neutral">Neutral</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="info">Info</Badge>
                </Row>
                <Row label="With dot">
                    <Badge variant="success" dot>
                        Active
                    </Badge>
                    <Badge variant="danger" dot>
                        Offline
                    </Badge>
                    <Badge variant="warning" dot>
                        Pending
                    </Badge>
                </Row>
                <Row label="Sizes">
                    <Badge size="sm">Small</Badge>
                    <Badge size="md">Medium</Badge>
                </Row>
            </Section>

            {/* Avatar */}
            <Section title="Avatar">
                <Row label="Sizes">
                    <Avatar size="xs" initials="XS" />
                    <Avatar size="sm" initials="SM" />
                    <Avatar size="md" initials="MD" />
                    <Avatar size="lg" initials="LG" />
                    <Avatar size="xl" initials="XL" />
                </Row>
                <Row label="Shapes">
                    <Avatar initials="PR" shape="circle" />
                    <Avatar initials="PR" shape="square" />
                </Row>
                <Row label="Image with fallback">
                    <Avatar src="https://i.pravatar.cc/80" alt="User" size="md" />
                    <Avatar src="https://broken-url.example" initials="FB" size="md" />
                </Row>
            </Section>

            {/* Spinner */}
            <Section title="Spinner">
                <Row label="Sizes">
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                </Row>
                <Row label="Variants">
                    <Spinner variant="primary" />
                    <Spinner variant="neutral" />
                    <div className="bg-neutral-800 p-2 rounded">
                        <Spinner variant="white" />
                    </div>
                </Row>
            </Section>

            {/* Divider */}
            <Section title="Divider">
                <Row label="Horizontal">
                    <div className="w-full space-y-4">
                        <Divider />
                        <Divider label="OR" />
                    </div>
                </Row>
                <Row label="Vertical">
                    <div className="flex h-12 items-center gap-3">
                        <Text>Left</Text>
                        <Divider orientation="vertical" />
                        <Text>Right</Text>
                    </div>
                </Row>
            </Section>

            {/* Input */}
            <Section title="Input">
                <Row label="Sizes">
                    <Input inputSize="sm" placeholder="Small" />
                    <Input inputSize="md" placeholder="Medium" />
                    <Input inputSize="lg" placeholder="Large" />
                </Row>
                <Row label="States">
                    <Input placeholder="Normal" />
                    <Input placeholder="Error" error helperText="This field is required." />
                    <Input placeholder="Disabled" disabled />
                </Row>
                <Row label="With label and helper">
                    <Input
                        label="Email"
                        placeholder="you@example.com"
                        helperText="We'll never share your email."
                        type="email"
                    />
                </Row>
            </Section>

            {/* Select */}
            <Section title="Select">
                <Row label="Sizes">
                    <Select inputSize="sm" placeholder="Small">
                        <option>Option A</option>
                        <option>Option B</option>
                    </Select>
                    <Select inputSize="md" placeholder="Medium">
                        <option>Option A</option>
                        <option>Option B</option>
                    </Select>
                    <Select inputSize="lg" placeholder="Large">
                        <option>Option A</option>
                        <option>Option B</option>
                    </Select>
                </Row>
                <Row label="States">
                    <Select placeholder="Normal">
                        <option>Option A</option>
                    </Select>
                    <Select error placeholder="Error" helperText="Please select an option.">
                        <option>Option A</option>
                    </Select>
                    <Select disabled placeholder="Disabled">
                        <option>Option A</option>
                    </Select>
                </Row>
                <Row label="With label">
                    <Select label="Country" placeholder="Select country">
                        <option>India</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                    </Select>
                </Row>
            </Section>

            {/* Checkbox */}
            <Section title="Checkbox">
                <Row>
                    <Checkbox label="Unchecked" />
                    <Checkbox label="Checked" checked onChange={() => {}} />
                    <Checkbox label="Indeterminate" indeterminate onChange={() => {}} />
                    <Checkbox label="Disabled" disabled />
                </Row>
                <Row label="Controlled">
                    <Checkbox
                        label={checked ? 'On' : 'Off'}
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                </Row>
            </Section>

            {/* Radio */}
            <Section title="Radio">
                <Row>
                    <Radio
                        name="demo"
                        label="Option A"
                        value="a"
                        checked={radio === 'a'}
                        onChange={() => setRadio('a')}
                    />
                    <Radio
                        name="demo"
                        label="Option B"
                        value="b"
                        checked={radio === 'b'}
                        onChange={() => setRadio('b')}
                    />
                    <Radio
                        name="demo"
                        label="Option C"
                        value="c"
                        checked={radio === 'c'}
                        onChange={() => setRadio('c')}
                    />
                    <Radio name="demo" label="Disabled" disabled />
                </Row>
            </Section>

            {/* Toggle */}
            <Section title="Toggle">
                <Row label="Sizes">
                    <Toggle
                        size="sm"
                        checked={toggled}
                        onChange={(e) => setToggled(e.target.checked)}
                        label="Small"
                    />
                    <Toggle
                        size="md"
                        checked={toggled}
                        onChange={(e) => setToggled(e.target.checked)}
                        label="Medium"
                    />
                </Row>
                <Row label="States">
                    <Toggle checked={false} onChange={() => {}} label="Off" />
                    <Toggle checked={true} onChange={() => {}} label="On" />
                    <Toggle disabled label="Disabled" />
                </Row>
            </Section>
        </main>
    );
};
