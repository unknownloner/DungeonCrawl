class AABB {

    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    depth: number;

    constructor(width: number, height: number, depth: number) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    get minX(): number {
        return this.x - this.width / 2;
    }
    get minY(): number {
        return this.y - this.height / 2;
    }
    get minZ(): number {
        return this.z - this.depth / 2;
    }
    get maxX(): number {
        return this.x + this.width / 2;
    }
    get maxY(): number {
        return this.y + this.height / 2;
    }
    get maxZ(): number {
        return this.z + this.depth / 2;
    }
    
    setPosition(x: number, y: number, z: number): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    translate(x: number, y: number, z: number): void {
        this.x += x;
        this.y += y;
        this.z += z;
    }
    
    setSize(width: number, height: number, depth: number): void {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    intersects(box: AABB): boolean {
        return this.minX <= box.maxX && this.maxX >= box.minX
            && this.minY <= box.maxY && this.maxY >= box.minY
            && this.minZ <= box.maxZ && this.maxZ >= box.minZ;
    }

    inersectsBounds(x: number, y: number, z: number, width: number, height: number, depth: number): boolean {
        var hw = width / 2;
        var hh = height / 2;
        var hd = depth / 2;

        var minX = x - hw;
        var minY = y - hh;
        var minZ = z - hd;

        var maxX = x + hw;
        var maxY = y + hh;
        var maxZ = z + hd;

        return this.minX <= maxX && this.maxX >= minX
            && this.minY <= maxY && this.maxY >= minY
            && this.minZ <= maxZ && this.maxZ >= minZ;
    }

}
