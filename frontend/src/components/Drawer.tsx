interface DrawerProps {
  toggleButton?: React.ReactNode;
  drawerId?: string;
  children?: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

const Drawer = ({
  toggleButton,
  drawerId = "my-drawer-4",
  children,
  sidebarContent,
}: DrawerProps) => {
  return (
    <div className="drawer-end">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor={drawerId} className="drawer-button">
          {toggleButton}
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className="bg-base-200 text-base-content min-h-full w-80">
          {sidebarContent}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
