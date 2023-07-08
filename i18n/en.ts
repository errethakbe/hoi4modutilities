// Hack tsc
/*eslint sort-keys: "warn"*/
const internalTable = /* SOT Do not remove this comment */{
    "combobox.all": "(All)",
    "combobox.multiple": "{0} (+{1})",
    "combobox.noselection": "(No selection)",
    "days": "day(s)",
    "error": "Error",
    "eventtree.delay": "Delay: ",
    "eventtree.eventid": "Event ID: ",
    "eventtree.fireonlyonce": "Fire only once",
    "eventtree.hidden": "Hidden",
    "eventtree.istriggeredonly": "Is triggered only",
    "eventtree.major": "Major",
    "eventtree.mtthbase": "Mean time to happen (base): ",
    "eventtree.scope": "Scope: ",
    "eventtree.title": "Title: ",
    "filenotondisk": "File is not on disk: {0}.",
    "focustree.allowbranch": "Allow branch: ",
    "focustree.ananymous": "<Anonymous focus tree>",
    "focustree.conditions": "Conditions: ",
    "focustree.focustree": "Focus tree: ",
    "focustree.nofocustree": "No focus tree.",
    "focustree.search": "Search: ",
    "focustree.sharedfocuses": "<Shared focuses>",
    "focustree.warnings": "Toggle warnings",
    "focustree.warnings.focusidconflict": "There're more than one focuses with ID {0} in file: {1}.",
    "focustree.warnings.focusidconflict2": "There're more than one focuses with ID {0} in files: {1}, {2}.",
    "focustree.warnings.focusnoid": "A focus defined in this file don't have ID: {0}.",
    "focustree.warnings.relativepositioncircularref": "There're circular reference in relative position ID of these focuses: {0}.",
    "focustree.warnings.relativepositionidnotexist": "Relative position ID of focus {0} not exist: {1}.",
    "gfx.filter": "Filter: ",
    "gfx.imagenotfound": "Image not found",
    "gfxindex.builddone": "Building GFX index done.",
    "gfxindex.building": "Building GFX index...",
    "gfxindex.workspace.builddone": "Building workspace GFX index done.",
    "gfxindex.workspace.building": "Building workspace GFX index...",
    "hours": "hour(s)",
    "infile": "In file {0}:\n",
    "loading": "Loading...",
    "modfile.clicktoselect": "Click to select a mod file...",
    "modfile.errorreading": "Error reading this file: ",
    "modfile.filenotexist": "Mod file not exist: {0}",
    "modfile.globalsetting": "Global setting",
    "modfile.infolder": "In folder {0}",
    "modfile.nomodfile": "(No mod descriptor)",
    "modfile.select": "Browse a .mod file...",
    "modfile.selectworkingmod": "Select working mod",
    "modfile.type": "Mod file",
    "modfile.workspacesetting": "Workspace setting",
    "pngfile": "PNG file",
    "preview.cantfinddoc": "Can't find opened document {0}.",
    "preview.cantpreviewfile": "Can't preview this file.\nValid types: {0}.",
    "preview.failedtoopen": "Failed to open file \"{0}\": {1}.",
    "preview.mustopenafolder": "Must open a folder before opening \"{0}\".",
    "preview.noactivedoc": "No active document.",
    "preview.selectafolder": "Select a folder to copy \"{0}\"",
    "preview.viewtitle": "HOI4: {0}",
    "scanref.done": "Scan reference done.",
    "scanref.noeditor": "No opened editor.",
    "scanref.unsupportedtype": "Unsupported file type to scan references.",
    "techtree.cantfindtechfolderin": "Can't find technology folder {0} in {1}.",
    "techtree.cantfindtechitemin": "Can't find containerwindowtype \"{0}\" in {1}",
    "techtree.cantfindviewin": "Can't find {0} in {1}.",
    "techtree.notechtree": "No technology tree.",
    "techtree.techfolder": "Technology folder: ",
    "worldmap.error.fieldnotindefaultmap": "Field \"{0}\" is not found in default.map.",
    "worldmap.error.multiply256": "Height and width of map image must be multiply of 256: {0}x{1}.",
    "worldmap.error.provinceidtoolarge": "Max province id is too large: {0}.",
    "worldmap.export.error": "Can't export world map: {0}.",
    "worldmap.export.error.imgformat": "Can't export world map: Image is not in correct format.",
    "worldmap.export.success": "Successfully exported world map.",
    "worldmap.export.title": "Export as image",
    "worldmap.failedtoload": "Failed to load world map: {0}.",
    "worldmap.failedtoopenstate": "Failed to open {0} file: {1}.",
    "worldmap.mustopenafolder": "Must open a folder before opening {0} file.",
    "worldmap.preview.title": "Preview World Map",
    "worldmap.progress.applying": "Applying changes...",
    "worldmap.progress.calculatingedge": "Calculating province edges...",
    "worldmap.progress.calculatingregion": "Calculating province region...",
    "worldmap.progress.comparing": "Comparing changes...",
    "worldmap.progress.loadingadjacencies": "Loading adjecencies...",
    "worldmap.progress.loadingcontinents": "Loading continents...",
    "worldmap.progress.loadingcountries": "Loading countries...",
    "worldmap.progress.loadingdefaultmap": "Loading default.map...",
    "worldmap.progress.loadingprovincebmp": "Loading province bmp...",
    "worldmap.progress.loadingprovincedef": "Loading province definitions...",
    "worldmap.progress.loadingrailways": "Loading railways...",
    "worldmap.progress.loadingstates": "Loading states...",
    "worldmap.progress.loadingstrategicregions": "Loading strategic regions...",
    "worldmap.progress.loadingsupplyareas": "Loading supply areas...",
    "worldmap.progress.loadingsupplynodes": "Loading supply nodes...",
    "worldmap.progress.loadstatecategories": "Loading state categories...",
    "worldmap.progress.mapprovincestostates": "Mapping provinces to states...",
    "worldmap.progress.mapprovincestostrategicregions": "Mapping provinces to strategic regions...",
    "worldmap.progress.mapstatetosupplyarea": "Mapping states to supply areas...",
    "worldmap.progress.mergeandvalidateprovince": "Merging and validating provinces...",
    "worldmap.progress.visualizing": "Visualizing map data: {0}",
    "worldmap.selectafolder": "Select a folder to copy {0} file",
    "worldmap.tooltip.adjacencies": "Adjecencies",
    "worldmap.tooltip.category": "Category",
    "worldmap.tooltip.coastal": "Coastal",
    "worldmap.tooltip.continent": "Continent",
    "worldmap.tooltip.coreof": "Core of",
    "worldmap.tooltip.impassable": "Impassable",
    "worldmap.tooltip.manpower": "Manpower",
    "worldmap.tooltip.navalterrain": "Naval terrain",
    "worldmap.tooltip.owner": "Owner",
    "worldmap.tooltip.province": "Province",
    "worldmap.tooltip.provinces": "Provinces",
    "worldmap.tooltip.railwaylevel": "Railway level",
    "worldmap.tooltip.state": "State",
    "worldmap.tooltip.states": "States",
    "worldmap.tooltip.strategicregion": "Strategic region",
    "worldmap.tooltip.supplyarea": "Supply area",
    "worldmap.tooltip.supplynode": "Supply node",
    "worldmap.tooltip.supplyvalue": "Supply value",
    "worldmap.tooltip.terrain": "Terrain",
    "worldmap.tooltip.type": "Type",
    "worldmap.tooltip.victorypoint": "Victory point",
    "worldmap.topbar.colorset": "Color set: ",
    "worldmap.topbar.colorset.continent": "Continent",
    "worldmap.topbar.colorset.country": "Country",
    "worldmap.topbar.colorset.manpower": "Manpower",
    "worldmap.topbar.colorset.provinceid": "Province ID",
    "worldmap.topbar.colorset.provincetype": "Province Type",
    "worldmap.topbar.colorset.stateid": "State ID",
    "worldmap.topbar.colorset.strategicregionid": "Strategic Region ID",
    "worldmap.topbar.colorset.supplyareaid": "Supply Area ID",
    "worldmap.topbar.colorset.supplyvalue": "Supply Value",
    "worldmap.topbar.colorset.terrain": "Terrain",
    "worldmap.topbar.colorset.vicotrypoint": "Victory Points",
    "worldmap.topbar.colorset.warnings": "Warnings",
    "worldmap.topbar.display": "Display: ",
    "worldmap.topbar.display.adaptzooming": "Adapt zooming",
    "worldmap.topbar.display.border": "Show border",
    "worldmap.topbar.display.fastrendering": "Fast rendering",
    "worldmap.topbar.display.label": "Show label",
    "worldmap.topbar.display.mousehighlight": "Mouse highlight",
    "worldmap.topbar.display.supply": "Show Supply",
    "worldmap.topbar.display.tooltip": "Show tooltip",
    "worldmap.topbar.open.title": "Open in workspace",
    "worldmap.topbar.refresh.title": "Refresh",
    "worldmap.topbar.search": "Search: ",
    "worldmap.topbar.search.placeholder": "Range: {0}",
    "worldmap.topbar.search.title": "Search",
    "worldmap.topbar.viewmode": "View mode: ",
    "worldmap.topbar.viewmode.province": "Province",
    "worldmap.topbar.viewmode.state": "State",
    "worldmap.topbar.viewmode.strategicregion": "Strategic Region",
    "worldmap.topbar.viewmode.supplyarea": "Supply Area",
    "worldmap.topbar.viewmode.warnings": "Warnings",
    "worldmap.topbar.warningfilter": "Warning filter: ",
    "worldmap.topbar.warnings.title": "Toggle warnings",
    "worldmap.warnings": "World map warnings: \n\n{0}",
    "worldmap.warnings.adjacencynotexist": "Adjacency not from or to an existing province: {0}, {1}",
    "worldmap.warnings.adjacencythroughnotexist": "Adjacency not through an existing province: {0}",
    "worldmap.warnings.continentnotdefined": "Continent {0} is not defined.",
    "worldmap.warnings.navalterrainnotdefined": "Naval terrain \"{0}\" is not defined.",
    "worldmap.warnings.nowarnings": "No warnings.",
    "worldmap.warnings.provincecolorconflict": "Province {0} has conflict color with province {1}.",
    "worldmap.warnings.provinceidconflict": "There're more than one rows for province id {0}. Set id to {1}.",
    "worldmap.warnings.provinceinmultiplestrategicregions": "Province {0} exists in multiple strategic regions: {1}, {2}.",
    "worldmap.warnings.provinceinmultistates": "Province {0} exists in multiple states: {1}, {2}.",
    "worldmap.warnings.provinceinstrategicregionnotexist": "Province {0} used in strategic region {1} doesn't exist.",
    "worldmap.warnings.provincenocontinent": "Land province {0} must belong to a continent.",
    "worldmap.warnings.provincenostrategicregion": "Province {0} is not in any strategic region.",
    "worldmap.warnings.provincenotadjacent": "Province {0}, {1} are not adjacent.",
    "worldmap.warnings.provincenotexist": "Province with id {0} doesn't exist.",
    "worldmap.warnings.provincenotexistindef": "Province with color ({0}, {1}, {2}) in provinces bmp ({3}, {4}) doesn't exist in definitions.",
    "worldmap.warnings.provincenotexistonmap": "Province {0} doesn't exist on map.",
    "worldmap.warnings.provincenothere": "Province {0} not included in this state. But victory points defined here.",
    "worldmap.warnings.provincetoolarge": "The province is too large: {0}x{1}.",
    "worldmap.warnings.railwaylinecountnotenough": "Not enough provinces in railway: {0}",
    "worldmap.warnings.statecategoryconflict": "There're multiple state categories have name \"{0}\".",
    "worldmap.warnings.statecategorynotexist": "State category of state {0} is not defined: {1}.",
    "worldmap.warnings.statehassea": "Sea province {0} shouldn't belong to a state.",
    "worldmap.warnings.stateidconflict": "There're more than one states using state id {0}.",
    "worldmap.warnings.stateidtoolarge": "Max state id is too large: {0}",
    "worldmap.warnings.stateinmultiplestrategicregions": "In state {0}, province {1} are not belong to same strategic region as other provinces.",
    "worldmap.warnings.stateinmultiplesupplyareas": "State {0} exists in multiple supply areas: {1}, {2}.",
    "worldmap.warnings.stateinsupplyareanotexist": "State {0} used in supply area {1} doesn't exist.",
    "worldmap.warnings.statenocategory": "The state doesn't have category field.",
    "worldmap.warnings.statenoid": "A state in {0} doesn't have id field.",
    "worldmap.warnings.statenoname": "The state doesn't have name field.",
    "worldmap.warnings.statenoprovinces": "State {0} in \"{1}\" doesn't have provinces.",
    "worldmap.warnings.statenosupplyarea": "State {0} is not in any supply area.",
    "worldmap.warnings.statenotexist": "State with id {0} doesn't exist.",
    "worldmap.warnings.statenovalidprovinces": "State {0} in doesn't have valid provinces.",
    "worldmap.warnings.stateprovincenotexist": "Province {0} used in state {1} doesn't exist.",
    "worldmap.warnings.statesnotcontiguous": "States in supply area {0} are not contiguous: {1}, {2}.",
    "worldmap.warnings.statetoolarge": "State {0} is too large: {1}x{2}.",
    "worldmap.warnings.strategicregionidconflict": "There're more than one strategic regions using ID {0}.",
    "worldmap.warnings.strategicregionidtoolarge": "Max strategic region ID is too large: {0}.",
    "worldmap.warnings.strategicregionnoid": "A strategic region in \"{0}\" doesn't have id field.",
    "worldmap.warnings.strategicregionnoname": "Strategic region {0} doesn't have name field.",
    "worldmap.warnings.strategicregionnoprovinces": "Strategic region {0} in \"{1}\" doesn't have provinces.",
    "worldmap.warnings.strategicregionnotexist": "Strategic region with id {0} doesn't exist.",
    "worldmap.warnings.strategicregionnovalidprovinces": "Strategic region {0} doesn't have valid provinces.",
    "worldmap.warnings.supplyareaidconflict": "There're more than one supply areas using ID {0}.",
    "worldmap.warnings.supplyareaidtoolarge": "Max supply area ID is too large: {0}.",
    "worldmap.warnings.supplyareanoid": "A supply area in \"{0}\" doesn't have id field.",
    "worldmap.warnings.supplyareanoname": "Supply area {0} doesn't have name field.",
    "worldmap.warnings.supplyareanostates": "Supply area {0} in \"{1}\" doesn't have states.",
    "worldmap.warnings.supplyareanotexist": "Supply area with id {0} doesn't exist.",
    "worldmap.warnings.supplyareanovalidstates": "Supply area {0} doesn't have valid states.",
    "worldmap.warnings.terraindefinedtwice": "Terrain {0} is defined in two files: {1}, {2}.",
    "worldmap.warnings.terrainnotdefined": "Terrain \"{0}\" is not defined.",
    "worldmap.warnings.xcrossing": "Map invalid X crossing at: ({0}, {1})."
};/* EOT Do not remove this comment */

export const __table = Object.assign(internalTable, {
    "worldmap.openfiletype.state": "state",
    "worldmap.openfiletype.strategicregion": "strategic region",
    "worldmap.openfiletype.supplyarea": "supply area",
});

// Real export
export default __table;
